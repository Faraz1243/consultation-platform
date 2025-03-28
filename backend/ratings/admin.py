from django.contrib import admin

# Register your models here.
from .models import Rating

admin.site.register(Rating)
class RatingAdmin(admin.ModelAdmin):
    list_display = ('user', 'consultant', 'rating', 'created_at')
    search_fields = ('user__username', 'consultant__user__username')
    list_filter = ('rating', 'created_at')
    readonly_fields = ('created_at', 'updated_at')
    date_hierarchy = 'created_at'
    ordering = ('-created_at',)