from rest_framework.routers import DefaultRouter
from apps.empleadoslc.api.api import EmpleadoslcViewSet

router = DefaultRouter()

router.register(r'empleadoslc',EmpleadoslcViewSet,basename = 'empleadoslc')
urlpatterns = router.urls