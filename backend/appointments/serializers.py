# booking/serializers.py
from rest_framework import serializers
from .models import Booking

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = '__all__'
        
        # fields = [
        #     'id', 'consultant', 'user', 'time_slot', 'date',
        #     'appointment_type', 'payment_method', 'is_confirmed',
        #     'status', 'first_name', 'last_name', 'email',
        #     'phone_number', 'street_address', 'city', 'state',
        #     'postal_code', 'booking_notes', 'created_at'
        # ]

    def validate(self, data):
        """
        1. Validate payment method based on appointment type.
        2. Prevent double-booking if is_confirmed is True.
        """
        consultant  = data.get('consultant')
        appointment_type = data.get('appointment_type')
        payment_method = data.get('payment_method')
        is_confirmed = data.get('is_confirmed', False)
        date = data.get('date')
        time_slot = data.get('time_slot')

        first_name = data.get('first_name')


        if consultant and time_slot:
            if time_slot.consultant != consultant:
                raise serializers.ValidationError({
                    'time_slot': 'Selected time slot does not belong to the provided consultant.'
                })
       
        # if first name empty
        if not first_name:
            raise serializers.ValidationError({
                "first_name": "First name is required."
            })
        
        phone_number = data.get('phone_number')
        street_address = data.get('street_address')
        if not phone_number:
            raise serializers.ValidationError({
                "phone_number": "Phone number is required."
            })
        if not street_address:
            raise serializers.ValidationError({
                "street_address": "Street address is required."
            })
        
        
        # GET 

        # 1) Payment method checks
        if appointment_type == 'online':
            # Must be JazzCash or Easypaisa
            if payment_method not in ['jazzcash', 'easypaisa']:
                raise serializers.ValidationError({
                    "payment_method": "Online appointments must use JazzCash or Easypaisa."
                })

        elif appointment_type == 'physical':
            # Can be JazzCash, Easypaisa, or on_checkup
            if payment_method not in ['jazzcash', 'easypaisa', 'on_checkup']:
                raise serializers.ValidationError({
                    "payment_method": "Physical appointments must use JazzCash, Easypaisa, or Cash on Checkup."
                })

        # 2) Prevent double-booking of confirmed slots
        #    Only do this if user is trying to confirm this booking
        if is_confirmed and date and time_slot:
            existing_qs = Booking.objects.filter(
                date=date,
                time_slot=time_slot,
                is_confirmed=True
            )
            # If this is an update, exclude the current instance
            if self.instance:
                existing_qs = existing_qs.exclude(pk=self.instance.pk)

            if existing_qs.exists():
                raise serializers.ValidationError({
                    "time_slot": "This time slot is already booked and confirmed."
                })

        return data
