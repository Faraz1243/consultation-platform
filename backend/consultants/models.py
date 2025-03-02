# consultants/models.py

from django.db import models
from django.conf import settings


def cnic_front_path(instance, filename):
        return f'consultants/cnic_front/{instance.user.username}/{filename}'
def cnic_back_path(instance, filename):
        return f'consultants/cnic_back/{instance.user.username}/{filename}'
def thumbnail_path(instance, filename):
        return f'consultants/thumbnails/{instance.user.username}/{filename}'

class Consultant(models.Model):
    # Define choices for 'type' and 'status' fields
    TYPE_CHOICES = [
        ('financial', 'Financial'),
        ('legal', 'Legal'),
        ('health', 'Health'),
        # Add more types as needed
    ]

    STATUS_CHOICES = [
        ('active', 'Active'),
        ('inactive', 'Inactive'),
        ('pending', 'Pending Approval'),
        # Add more statuses as needed
    ]
    
    # Linking Consultant to User
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='consultant_profile'
    )
    
    # Consultant-specific fields
    title = models.CharField(max_length=255)
    cnic = models.CharField(max_length=15, unique=True)  # Adjust max_length as per CNIC format
    cnic_front = models.ImageField(upload_to=cnic_front_path ,blank=True)
    cnic_back = models.ImageField(upload_to=cnic_back_path ,blank=True)
    office_address = models.TextField()

    thumbnail = models.ImageField(upload_to=thumbnail_path , blank=True)
    fee = models.DecimalField(max_digits=10, decimal_places=2)  # Adjust as needed
    discount = models.DecimalField(max_digits=10, decimal_places=2, default=0)  # Adjust as needed
    about_info = models.TextField(max_length=1000 , default='No information available')
    type = models.CharField(max_length=50, choices=TYPE_CHOICES)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    

    
    def __str__(self):
        return f"{self.user.username} - {self.title}"


# consultants/models.py

class TimeSlot(models.Model):
    consultant = models.ForeignKey(
        Consultant, 
        on_delete=models.CASCADE, 
        related_name='time_slots'

    )
    
    
    day = models.CharField(max_length=10, choices=[
        ('Monday', 'Monday'),
        ('Tuesday', 'Tuesday'),
        ('Wednesday', 'Wednesday'),
        ('Thursday', 'Thursday'),
        ('Friday', 'Friday'),
        ('Saturday', 'Saturday'),
        ('Sunday', 'Sunday'),
    ])
    
    start_time = models.TimeField()  # Example: 10:30 AM
    end_time = models.TimeField()  # Example: 10:45 AM
    is_available = models.BooleanField(default=True)  # To mark slots as available/unavailable
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    class Meta:
        unique_together = ('consultant', 'day', 'start_time', 'end_time')  # Prevent duplicate slots
        ordering = ['day', 'start_time']

    def __str__(self):
        return f"{self.consultant.title} - {self.day}: {self.start_time} to {self.end_time}"




class WeeklyTiming(models.Model):
    consultant = models.ForeignKey(Consultant, on_delete=models.CASCADE, related_name='weekly_timings')
    day = models.CharField(max_length=10, choices=[
        ('Monday', 'Monday'),
        ('Tuesday', 'Tuesday'),
        ('Wednesday', 'Wednesday'),
        ('Thursday', 'Thursday'),
        ('Friday', 'Friday'),
        ('Saturday', 'Saturday'),
        ('Sunday', 'Sunday'),
    ])
    start_time = models.TimeField(null=True, blank=True)
    end_time = models.TimeField(null=True, blank=True)
    is_closed = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.consultant.title} - {self.day}"