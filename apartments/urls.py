from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ApartmentViewSet, BuilderViewSet, FileUploadViewSet, login_view, upload_file

router = DefaultRouter()
router.register(r'apartments', ApartmentViewSet)
router.register(r'builders', BuilderViewSet)
router.register(r'files', FileUploadViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('login/', login_view, name='login'),
    path('upload/', upload_file, name='upload-file'),
]
