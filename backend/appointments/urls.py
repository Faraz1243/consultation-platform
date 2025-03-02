# users/urls.py
from django.urls import path

from . import views
from .views import  BookingListCreateView

urlpatterns = [
     
    #  path('api/profile/', ConsultantListView.as_view(), name='consultant-list'),
    #  path('api/csrf', GetCSRFTokenView.as_view(), name='get-csrf-token'),
     path('api/book-appointment', BookingListCreateView.as_view(), name='book-appointment'),
   
    
]
