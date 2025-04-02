from django.contrib import admin
from django.utils.html import format_html
from django.utils.safestring import mark_safe
import json
from .models import Apartment, Builder, UploadedFile

@admin.register(Builder)
class BuilderAdmin(admin.ModelAdmin):
    list_display = ('name', 'phone_number', 'email', 'site_link')
    search_fields = ('name', 'phone_number', 'email')
    list_filter = ('name',)
    
    def site_link(self, obj):
        if obj.site:
            return format_html('<a href="{}" target="_blank">{}</a>', obj.site, obj.site)
        return "-"
    site_link.short_description = "Веб-сайт"

class ApartmentTypeInline(admin.TabularInline):
    verbose_name = "Тип квартиры"
    verbose_name_plural = "Типы квартир"
    model = None  # This is virtual, apartment_types is stored as JSONField
    
    def has_add_permission(self, request, obj=None):
        return False
    
    def has_delete_permission(self, request, obj=None):
        return False

@admin.register(Apartment)
class ApartmentAdmin(admin.ModelAdmin):
    list_display = ('name', 'address', 'material', 'floor', 'builder', 'home_type')
    list_filter = ('material', 'home_type', 'builder', 'security', 'has_balcony')
    search_fields = ('name', 'address', 'description')
    readonly_fields = ('formatted_images', 'formatted_available_programs', 'formatted_conditions', 'formatted_apartment_types')
    
    def formatted_images(self, obj):
        if not obj.images:
            return "-"
        html = "<ul>"
        for image_url in obj.images:
            html += f'<li><img src="{image_url}" width="150" /><br/>{image_url}</li>'
        html += "</ul>"
        return mark_safe(html)
    formatted_images.short_description = "Изображения"
    
    def formatted_available_programs(self, obj):
        if not obj.available_programs:
            return "-"
        html = "<ul>"
        for program in obj.available_programs:
            html += f"<li>{program}</li>"
        html += "</ul>"
        return mark_safe(html)
    formatted_available_programs.short_description = "Доступные программы"
    
    def formatted_conditions(self, obj):
        if not obj.conditions:
            return "-"
        html = "<ul>"
        for condition in obj.conditions:
            html += f"<li>{condition}</li>"
        html += "</ul>"
        return mark_safe(html)
    formatted_conditions.short_description = "Условия"
    
    def formatted_apartment_types(self, obj):
        if not obj.apartment_types:
            return "-"
        html = "<table border='1' cellpadding='5'><tr>"
        # Header row
        if obj.apartment_types and len(obj.apartment_types) > 0:
            for key in obj.apartment_types[0].keys():
                html += f"<th>{key}</th>"
            html += "</tr>"
            
            # Data rows
            for apt_type in obj.apartment_types:
                html += "<tr>"
                for key, value in apt_type.items():
                    if key == 'scheme_url' and value:
                        html += f"<td><img src='{value}' width='100' /></td>"
                    else:
                        html += f"<td>{value}</td>"
                html += "</tr>"
        html += "</table>"
        return mark_safe(html)
    formatted_apartment_types.short_description = "Типы квартир"
    
    fieldsets = (
        ('Основная информация', {
            'fields': ('name', 'address', 'object_code', 'description', 'builder')
        }),
        ('Характеристики здания', {
            'fields': ('material', 'floor', 'building_count', 'building_start_date', 'start_date', 'end_date')
        }),
        ('Дополнительные характеристики', {
            'fields': ('home_type', 'bathroom_type', 'security', 'parking_type', 'elevator_type')
        }),
        ('Балкон', {
            'fields': ('has_balcony', 'is_balcony_glazed')
        }),
        ('Изображения', {
            'fields': ('formatted_images',),
        }),
        ('Данные JSON', {
            'fields': ('formatted_available_programs', 'formatted_conditions', 'formatted_apartment_types'),
            'classes': ('collapse',)
        })
    )

@admin.register(UploadedFile)
class UploadedFileAdmin(admin.ModelAdmin):
    list_display = ('__str__', 'uploaded_at', 'file_preview', 'file_url')
    readonly_fields = ('file', 'uploaded_at', 'file_preview', 'file_url')
    ordering = ('-uploaded_at',)
    
    def file_preview(self, obj):
        file_url = obj.file.url
        filename = obj.file.name.lower()
        if filename.endswith(('.jpg', '.jpeg', '.png', '.gif')):
            return format_html('<img src="{}" width="100" />', file_url)
        return "Не изображение"
    file_preview.short_description = "Превью"
    
    def file_url(self, obj):
        return format_html('<a href="{}" target="_blank">{}</a>', obj.file.url, obj.file.url)
    file_url.short_description = "URL файла"
