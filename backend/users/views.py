from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import get_user_model, authenticate
from django.middleware.csrf import get_token
from rest_framework_simplejwt.tokens import RefreshToken
from users.forms import UserRegistrationForm
from users.models import User
import logging
import json

# Configure logger
logger = logging.getLogger(__name__)

class SetCSRFTokenView(APIView):
    """
    API endpoint to set the CSRF token.
    """
    def get(self, request, *args, **kwargs):
        get_token(request)
        return Response({'message': 'CSRF cookie set'}, status=status.HTTP_200_OK)

class RegisterUserView(APIView):
    """
    API endpoint for user registration.
    """
    def post(self, request):
        try:
            data = request.data

            email = data.get('email')
            username = data.get('username')
            password = data.get('password')
            phone = data.get('phone')

            if not username:
                return Response({'errors': {'username': ['Username is required']}}, status=status.HTTP_400_BAD_REQUEST)
            if not email:
                return Response({'errors': {'email': ['Email is required']}}, status=status.HTTP_400_BAD_REQUEST)
            if not password:
                return Response({'errors': {'password': ['Password is required']}}, status=status.HTTP_400_BAD_REQUEST)
            if not phone:
                return Response({'errors': {'phone': ['Phone number is required']}}, status=status.HTTP_400_BAD_REQUEST)

            User = get_user_model()

            # Check for duplicate fields
            if User.objects.filter(email=email).exists():
                return Response({'errors': {'detail': ['Email already in use']}}, status=status.HTTP_400_BAD_REQUEST)

            if User.objects.filter(username=username).exists():
                return Response({'errors': {'detail': ['Username already in use']}}, status=status.HTTP_400_BAD_REQUEST)

            if User.objects.filter(phone=phone).exists():
                return Response({'errors': {'detail': ['Phone number already in use']}}, status=status.HTTP_400_BAD_REQUEST)

            # Initialize the form
            form = UserRegistrationForm(data=data)
            if form.is_valid():
                form.save()
                return Response({'message': 'User registered successfully'}, status=status.HTTP_201_CREATED)
            else:
                return Response({'errors': form.errors}, status=status.HTTP_400_BAD_REQUEST)

        except Exception as e:
            logger.error(f"Error during user registration: {str(e)}")
            return Response({'error': 'Internal server error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class LoginView(APIView):
    """
    API endpoint for user login.
    """
    def post(self, request):
        try:
            data = request.data

            email = data.get('email')
            password = data.get('password')

            if not email or not password:
                return Response(
                    {'success': False, 'message': 'Email and password are required.'},
                    status=status.HTTP_400_BAD_REQUEST
                )

            user = authenticate(request, username=email, password=password)
            if user is not None:
                # Generate the token
                refresh = RefreshToken.for_user(user)
                access_token = str(refresh.access_token)

                first_name = User.objects.get(email=email).first_name

                response = Response({
                    'success': True,
                    'message': 'Login successful.',
                    'token': access_token,
                }, status=status.HTTP_200_OK)

                # Set the cookie with the access token
                response.set_cookie(
                    key='access_token',
                    value=access_token,
                    httponly=True,  # JavaScript can't read this cookie
                    secure=False,  # Set to True in production with HTTPS
                    samesite='Strict',  # 'None', 'Strict', or 'Lax'
                    max_age=5 * 60  # Token lifetime in seconds
                )

                return response

            return Response({'success': False, 'message': 'Invalid credentials.'}, status=status.HTTP_401_UNAUTHORIZED)

        except Exception as e:
            logger.error(f"Error during login: {str(e)}")
            return Response({'error': 'Internal server error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
