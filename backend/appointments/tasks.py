# booking/tasks.py
from celery import shared_task
from django.core.mail import send_mail
from django.utils import timezone
from datetime import datetime, timedelta
from django.conf import settings
import logging

logger = logging.getLogger(__name__)

from .models import Booking

@shared_task
def send_appointment_reminders():
    print("Sending appointment reminders...")
    logger.info("Sending appointment reminders...")
    now = timezone.now()
    reminder_window = now + timedelta(minutes=5)
    bookings = Booking.objects.filter(status='confirmed', date=now.date())

    for booking in bookings:
        appointment_datetime = timezone.make_aware(
            datetime.combine(booking.date, booking.time_slot.start_time),
            timezone.get_current_timezone()
        )
        if now <= appointment_datetime <= reminder_window:
            subject = "Appointment Reminder"
            message = (
                f"Dear {booking.first_name},\n\n"
                f"Your appointment with {booking.consultant.title} is scheduled at "
                f"{booking.time_slot.start_time} on {booking.date}.\n\n"
                "Please be ready."
            )
            recipient_list = [booking.user.email]
          
            send_mail(subject, message, settings.EMAIL_HOST_USER, recipient_list, fail_silently=False)
