from rest_framework import serializers
from .models import Rating

class RatingSerializer(serializers.ModelSerializer):
    user_name = serializers.CharField(source='user.username', read_only=True)
    class Meta:
        model = Rating
        # fields = ['id', 'user_name', 'rating', 'comment', 'created_at']
        fields = ['user_name',  'rating', 'comment', 'created_at']