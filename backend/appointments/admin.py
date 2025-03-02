from django.contrib import admin

# Register your models here.
from .models import Booking , CalendlyEvent

admin.site.register(Booking)
admin.site.register(CalendlyEvent)

