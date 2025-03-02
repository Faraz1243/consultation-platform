from django.contrib import admin

# Register your models here.
from .models import Consultant , WeeklyTiming  , TimeSlot

admin.site.register(Consultant)
class ConsultantAdmin(admin.ModelAdmin):
    list_display = ( 'user', 'title', 'email', 'phone', 'type', 'status', 'created_at')
    search_fields = ('user__username', 'email', 'cnic' , 'phone')
    list_filter = ('type', 'status')
    readonly_fields = ('created_at', 'updated_at')

admin.site.register(WeeklyTiming)
class WeeklyTimingAdmin(admin.ModelAdmin):
    list_display = ('consultant', 'day', 'start_time', 'end_time')
    search_fields = ('consultant__user__username', 'consultant__user__email', 'day')
    list_filter = ('day',)

admin.site.register(TimeSlot)
class TimeSlotAdmin(admin.ModelAdmin):
    list_display = ('consultant', 'day', 'start_time', 'end_time', 'is_available')
    search_fields = ('consultant__user__username', 'consultant__user__email', 'day')
    list_filter = ('day', 'is_available')








