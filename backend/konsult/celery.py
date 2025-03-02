# myproject/celery.py
import os
from celery import Celery
from django.conf import settings

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'konsult.settings')  
# 'myproject' 

app = Celery('konsult')  
app.config_from_object('django.conf:settings', namespace='CELERY')
app.autodiscover_tasks()

# -------------- Celery Beat Schedule -------------
from celery.schedules import crontab

app.conf.beat_schedule = {
    'send-appointment-reminders-every-minute': {
        'task': 'appointments.tasks.send_appointment_reminders',
        'schedule': 20.0,  # har minute
       
    },
}
