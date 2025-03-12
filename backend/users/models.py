from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    STATUS_CHOICES = (
        ('active', 'Active'),
        ('inactive', 'Inactive'),
        ('suspended', 'Suspended'),
    )

    USER_TYPE_CHOICES = (
        ('admin', 'Admin'),
        ('consultant', 'Consultant'),
        ('client', 'Client'),
    )

   

    # Add extra fields :
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='active')
    phone = models.CharField(max_length=11, blank=True, null=True)
    user_type = models.CharField(max_length=20, choices=USER_TYPE_CHOICES, default='client')
    updated_at = models.DateTimeField(auto_now=True)

    # The __str__ method is useful for representing the object as a string
    def __str__(self):
        return f"{self.username} ({self.user_type})"
