from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import BookingSerializer
from rest_framework.permissions import IsAuthenticated

# Create your views here.


class BookingListCreateView(APIView):

    # permission_classes = [IsAuthenticated]  # Ensure only authenticated users can access
    """
    API view to create a new booking.
    """
    def post(self, request, format=None):
        # GET username from the authenticated user

        serializer = BookingSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        # return
    
    

       
        
