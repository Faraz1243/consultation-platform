# consultants/views.py

import logging
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions, exceptions
from .models import Consultant
from .serializers import ConsultantSerializer , TimeSlotSerializer , WeeklyTimingSerializer
from rest_framework.pagination import PageNumberPagination
from django.core.exceptions import PermissionDenied
from django.views.decorators.csrf import ensure_csrf_cookie
from django.utils.decorators import method_decorator
from rest_framework.permissions import AllowAny, IsAuthenticated

logger = logging.getLogger(__name__)

@method_decorator(ensure_csrf_cookie, name='dispatch')
class GetCSRFTokenView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, format=None):
        return Response({'detail': 'CSRF cookie set.'})



class CreateTimeSlotView(APIView):
    """
    API view to create a new time slot.
    """
    def post(self, request, format=None):
        print("Received data:", request.data)  # Debugging output
        serializer = TimeSlotSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class ConsultantListView(APIView):
    #permission_classes = [IsAuthenticated]  # Ensure only authenticated users can access

    # def handle_exception(self, exc):
    #     print(f"An error occurred: {exc}")
    #     if isinstance(exc, exceptions.NotAuthenticated):
    #         return Response(
    #             {'error': 'Authentication credentials were not provided or are invalid.'},
    #             status=status.HTTP_401_UNAUTHORIZED
    #         )
    #     elif isinstance(exc, exceptions.PermissionDenied):
    #         return Response(
    #             {'error': 'Permission denied. You may not have the necessary permissions or the CSRF token is missing/invalid.'},
    #             status=status.HTTP_403_FORBIDDEN
    #         )
    #     elif isinstance(exc, exceptions.APIException):
    #         return Response({'error': exc.detail}, status=exc.status_code)
    #     else:
    #         return super().handle_exception(exc)

    def post(self, request, format=None):
        try:
            ordering = request.query_params.get('ordering', 'fee')
            print(f"Received ordering parameter: {ordering}")

            valid_ordering_fields = ['fee', '-fee', 'created_at', '-created_at']
            if ordering not in valid_ordering_fields:
                print(f"Invalid ordering parameter received: {ordering}")
                return Response(
                    {'error': 'Invalid ordering parameter.'},
                    status=status.HTTP_400_BAD_REQUEST
                )

            consultants = Consultant.objects.select_related('user').all().order_by(ordering)
            print(f"Fetched {consultants} consultants")

            paginator = PageNumberPagination()
            paginator.page_size = 10  # Adjust as needed
            paginated_consultants = paginator.paginate_queryset(consultants, request)
            print(f"Paginated consultants: {paginated_consultants}")

            if paginated_consultants is None:
                # In case pagination returns None (no results or something else),
                # handle gracefully:
                return Response({'error': 'No data found.'}, status=404)

            serializer = ConsultantSerializer(paginated_consultants, many=True, context={'request': request})
            print(f"Serialized data: {serializer.data}")
            
            print(f"Paginated response data: {paginator.get_paginated_response(serializer.data).data}")
            return paginator.get_paginated_response(serializer.data)

        except PermissionDenied as e:
            print(f"Permission Denied: {e}")
            return self.handle_exception(e)
        except Exception as e:
            print(f"An unexpected error occurred: {e}")
            return Response(
                {'error': 'An unexpected error occurred. Please try again later.'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

    def get(self, request, format=None):
        """
        Handle GET requests to fetch consultants' profiles.
        """
        try:
            # Fetch all consultants
           
            consultants = Consultant.objects.select_related('user').all()
          
            
            # Paginate the consultants
            paginator = PageNumberPagination()
            paginator.page_size =1  # Default page size
            paginated_consultants = paginator.paginate_queryset(consultants, request)

            if not paginated_consultants:
                logger.info("No consultants found.")
                return Response(
                    {'message': 'No consultants found.'},
                    status=status.HTTP_404_NOT_FOUND
                )

            # Serialize the data
            serializer = ConsultantSerializer(paginated_consultants, many=True, context={'request': request})

            # Return paginated response
            # print(f"Returning paginated response: {paginator.get_paginated_response(serializer.data).data}")
            return paginator.get_paginated_response(serializer.data)

        except Exception as e:
            logger.exception(f"Unexpected error: {e}")
            return Response(
                {'error': 'An unexpected error occurred. Please try again later.'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )



            