# users/urls.py
from django.urls import path

from . import views
from .views import RegisterUserView , LoginView , SetCSRFTokenView
 


urlpatterns = [
     path('api/set-csrf-token', SetCSRFTokenView.as_view(), name='set_csrf_token'),
    path('api/register', RegisterUserView.as_view(), name='register'),
    path('api/authenticate', LoginView.as_view(), name='login'),
    #path('csrf/', get_csrf_token, name='csrf'),
]
