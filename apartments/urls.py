from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ApartmentViewSet, BuilderViewSet, FileUploadViewSet, ApplicationViewSet, login_view, upload_file

router = DefaultRouter()
router.register(r'apartments', ApartmentViewSet)
router.register(r'builders', BuilderViewSet)
router.register(r'files', FileUploadViewSet)
router.register(r'applications', ApplicationViewSet, basename='applications')

urlpatterns = [
    path('', include(router.urls)),
    path('login/', login_view, name='login'),
    path('upload/', upload_file, name='upload-file'),

]
