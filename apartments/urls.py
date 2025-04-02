from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ApartmentViewSet, BuilderViewSet, login_view

router = DefaultRouter()
router.register(r'apartments', ApartmentViewSet)
router.register(r'builders', BuilderViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('login/', login_view, name='login'),
]
