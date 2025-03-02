# users/urls.py
from django.urls import path

from . import views
from .views import ConsultantListView ,GetCSRFTokenView

urlpatterns = [
     
     path('api/profile/', ConsultantListView.as_view(), name='consultant-list'),
     path('api/csrf', GetCSRFTokenView.as_view(), name='get-csrf-token'),
     path('api/all_consultants/', ConsultantListView.as_view(), name='all_consultants'),
   
    
]
