from rest_framework.routers import DefaultRouter
from apps.beneficios.api.api import BeneficiosViewSet

router = DefaultRouter()

router.register(r'beneficios',BeneficiosViewSet,basename = 'beneficios')
urlpatterns = router.urls