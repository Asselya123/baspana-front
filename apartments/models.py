from django.db import models
import os
import uuid

def upload_path(instance, filename):
    ext = filename.split('.')[-1]
    filename = f"{uuid.uuid4()}.{ext}"
    return os.path.join('uploads', filename)

class UploadedFile(models.Model):
    file = models.FileField(upload_to=upload_path)
    uploaded_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return os.path.basename(self.file.name)

class Builder(models.Model):
    icon = models.URLField(blank=True)
    name = models.CharField(max_length=255)
    contacts = models.TextField()
    phone_number = models.CharField(max_length=20)
    site = models.URLField(blank=True)
    email = models.EmailField()

    def __str__(self):
        return self.name

class Apartment(models.Model):
    MATERIAL_CHOICES = (
        ('brick', 'Кирпич'),
        ('panel', 'Панель'),
        ('monolithic', 'Монолит'),
        ('other', 'Другое'),
    )
    
    HOME_TYPE_CHOICES = (
        ('apartment', 'Квартира'),
        ('house', 'Дом'),
    )
    
    BATHROOM_TYPE_CHOICES = (
        ('combined', 'Совмещенный'),
        ('separate', 'Раздельный'),
    )
    
    SECURITY_CHOICES = (
        ('security', 'Охрана'),
        ('concierge', 'Консьерж'),
        ('none', 'Отсутствует'),
    )
    
    PARKING_TYPE_CHOICES = (
        ('underground', 'Подземная'),
        ('ground', 'Наземная'),
        ('none', 'Отсутствует'),
    )
    
    ELEVATOR_TYPE_CHOICES = (
        ('passenger', 'Пассажирский'),
        ('cargo', 'Грузовой'),
        ('both', 'Грузопассажирский'),
        ('none', 'Отсутствует'),
    )
    
    name = models.CharField(max_length=255)
    address = models.TextField()
    images = models.JSONField(default=list)
    object_code = models.CharField(max_length=100)
    floor = models.PositiveIntegerField()
    building_count = models.PositiveIntegerField()
    material = models.CharField(max_length=50, choices=MATERIAL_CHOICES)
    start_date = models.DateField()
    end_date = models.DateField()
    available_programs = models.JSONField(default=list)
    conditions = models.JSONField(default=list)
    description = models.TextField()
    has_balcony = models.BooleanField(default=False)
    is_balcony_glazed = models.BooleanField(default=False)
    building_start_date = models.DateField()
    home_type = models.CharField(max_length=50, choices=HOME_TYPE_CHOICES)
    bathroom_type = models.CharField(max_length=50, choices=BATHROOM_TYPE_CHOICES)
    security = models.CharField(max_length=50, choices=SECURITY_CHOICES)
    parking_type = models.CharField(max_length=50, choices=PARKING_TYPE_CHOICES)
    elevator_type = models.CharField(max_length=50, choices=ELEVATOR_TYPE_CHOICES)
    apartment_types = models.JSONField(default=list)
    builder = models.ForeignKey(Builder, on_delete=models.CASCADE, related_name='apartments')
    
    def __str__(self):
        return self.name
