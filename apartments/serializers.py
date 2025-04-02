from rest_framework import serializers
from .models import Apartment, Builder, UploadedFile

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=150)
    password = serializers.CharField(max_length=128, write_only=True)

class BuilderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Builder
        fields = ['icon', 'name', 'contacts', 'phone_number', 'site', 'email']

class ApartmentSerializer(serializers.ModelSerializer):
    builder = BuilderSerializer(read_only=True)
    builder_id = serializers.PrimaryKeyRelatedField(
        queryset=Builder.objects.all(),
        source='builder',
        write_only=True
    )
    
    class Meta:
        model = Apartment
        fields = ['id', 'name', 'address', 'images', 'object_code', 'floor', 'building_count',
                 'material', 'start_date', 'end_date', 'available_programs', 'conditions',
                 'description', 'has_balcony', 'is_balcony_glazed', 'building_start_date',
                 'home_type', 'bathroom_type', 'security', 'parking_type', 'elevator_type',
                 'apartment_types', 'builder', 'builder_id']
