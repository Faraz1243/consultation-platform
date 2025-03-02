# booking/models.py
from django.db import models
from consultants.models import Consultant, TimeSlot
from users.models import User  # If you have a custom User model in "users" app

class Booking(models.Model):
    PAYMENT_METHOD_CHOICES = [
        ('jazzcash', 'JazzCash'),
        ('easypaisa', 'Easypaisa'),
        ('on_checkup', 'Cash on Checkup'),
    ]

    APPOINTMENT_TYPE_CHOICES = [
        ('online', 'Online'),
        ('physical', 'Physical'),
    ]

    consultant = models.ForeignKey(
        Consultant,
        on_delete=models.CASCADE,
        related_name='bookings'
    )
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='bookings'
    )
    time_slot = models.ForeignKey(
        TimeSlot,
        on_delete=models.CASCADE,
        related_name='bookings'
    )
    date = models.DateField()
    appointment_type = models.CharField(
        max_length=20,
        choices=APPOINTMENT_TYPE_CHOICES
    )
    payment_method = models.CharField(
        max_length=20,
        choices=PAYMENT_METHOD_CHOICES
    )
    is_confirmed = models.BooleanField(default=False)
    status = models.CharField(
        max_length=20,
        choices=[
            ('pending', 'Pending'),
            ('confirmed', 'Confirmed'),
            ('cancelled', 'Cancelled'),
            ('completed', 'Completed'),
        ],
        default='pending'
    )
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    # email = models.EmailField()
    phone_number = models.CharField(max_length=15)
    street_address = models.TextField()
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    postal_code = models.CharField(max_length=10)
    booking_notes = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return (
            f"Booking for {self.consultant.title} by {self.user.username} "
            f"on {self.date} ({self.time_slot.start_time} - {self.time_slot.end_time})"
        )


class CalendlyEvent(models.Model):
    """
    Stores raw webhook payloads from Calendly and relates them to internal bookings.
    """
    event_uri = models.URLField(
        max_length=255,
        unique=True,
        help_text="Calendly's unique event URL or identifier"
    )
    event_type = models.CharField(
        max_length=100,
        help_text="Type of webhook event (e.g. 'invitee.created', 'invitee.canceled')"
    )
    raw_payload = models.JSONField(
        help_text="Full JSON payload received from Calendly webhook"
    )
    appointment = models.ForeignKey(
        Booking,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='calendly_events',
        help_text="Link back to the internal Booking, if mapped"
    )
    created_at = models.DateTimeField(
        auto_now_add=True,
        help_text="When this webhook was processed"
    )

    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Calendly Event'
        verbose_name_plural = 'Calendly Events'

    def __str__(self):
        return f"{self.event_type} @ {self.event_uri}"
