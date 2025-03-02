# consultants/serializers.py
from rest_framework import serializers
from .models import Consultant , WeeklyTiming , TimeSlot
from ratings.serializers import RatingSerializer
from rest_framework.exceptions import ValidationError




class TimeSlotSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField( read_only=True)  # Make the ID visible in the response
    start_time = serializers.SerializerMethodField()
    end_time = serializers.SerializerMethodField()
    class Meta:
        model = TimeSlot
        fields = [ 'id','consultant', 'day', 'start_time', 'end_time', 'is_available']

    def get_start_time(self, obj):
        # Check if start_time exists and format it in am/pm
        return obj.start_time.strftime('%I:%M %p') if obj.start_time else None

    def get_end_time(self, obj):
        # Check if end_time exists and format it in am/pm
        return obj.end_time.strftime('%I:%M %p') if obj.end_time else None

    def validate(self, data):
        # Get consultant and day from the validated data
        consultant = data.get('consultant')
        day = data.get('day')

        # Check if the day is marked as closed in WeeklyTiming
        weekly_timing = WeeklyTiming.objects.filter(consultant=consultant, day=day).first()
        if weekly_timing and weekly_timing.is_closed:
            raise ValidationError(f"Cannot add a time slot on {day} as it is marked as closed.")

        return data
    


class WeeklyTimingSerializer(serializers.ModelSerializer):
    # Format start_time and end_time in am/pm
    start_time = serializers.SerializerMethodField()
    end_time = serializers.SerializerMethodField()

    class Meta:
        model = WeeklyTiming
        fields = ['day', 'start_time', 'end_time', 'is_closed']

    def get_start_time(self, obj):
        # Check if start_time exists and format it in am/pm
        return obj.start_time.strftime('%I:%M %p') if obj.start_time else None

    def get_end_time(self, obj):
        # Check if end_time exists and format it in am/pm
        return obj.end_time.strftime('%I:%M %p') if obj.end_time else None

class ConsultantSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)  # Make the ID visible in the response
    email = serializers.CharField(source='user.username', read_only=True)
    calculated_fee = serializers.SerializerMethodField()  # Calculated fee after discount
    created_at = serializers.SerializerMethodField()
    phone = serializers.CharField(source='user.phone', read_only=True)
    weekly_timings = WeeklyTimingSerializer(many=True, read_only=True)  # Nested serializer for weekly timings
    time_slots = TimeSlotSerializer(many=True, read_only=True)  # Nested serializer for time slots
    ratings = RatingSerializer(many=True, read_only=True)  # Nested serializer for ratings
    total_ratings = serializers.SerializerMethodField()
    rating_summary = serializers.SerializerMethodField()


    class Meta:
        model = Consultant
        fields = ['id','email', 'title', 'thumbnail', 'fee', 'calculated_fee' ,'office_address', 'phone', 'time_slots', 'total_ratings' ,'rating_summary','ratings', 'weekly_timings','type', 'created_at' , 'discount' , 'about_info']
    
    def get_calculated_fee(self, obj):
         return float(obj.fee) - float(obj.discount)
    
    def get_created_at(self, obj):
        return obj.created_at.strftime('%d %B %Y')  # Format as "14 October 2024"
    
    def get_total_ratings(self, obj):
        return obj.ratings.count()

    def get_rating_summary(self, obj):
        """
        Returns a dictionary with the count of each rating level.
        Example: {5: 6, 4: 3, 3: 1, 2: 0, 1: 0}
        """
        rating_summary = {5: 0, 4: 0, 3: 0, 2: 0, 1: 0}
        for rating in obj.ratings.all():
            rating_summary[rating.rating] += 1
        return rating_summary

        
