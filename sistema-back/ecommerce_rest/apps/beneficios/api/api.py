from calendar import month
from rest_framework import status
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.parsers import JSONParser, MultiPartParser
from datetime import date, datetime, timedelta
from apps.beneficios.api.serializers import BeneficiosSerializer, BeneficiosRetrieveSerializer
from apps.beneficios.models import Beneficios
from apps.empleadoslc.models import Empleadoslc
from dateutil.relativedelta import relativedelta
import datetime


class BeneficiosViewSet(viewsets.ModelViewSet):
    serializer_class = BeneficiosSerializer
    parser_classes = (JSONParser, MultiPartParser, )

    def get_queryset(self, pk=None):
        if pk is None:
            return self.get_serializer().Meta.model.objects.filter(state=True)
        return self.get_serializer().Meta.model.objects.filter(id=pk, state=True).first()

    def retrieve(self, request, pk=None):
        print(pk)
        Beneficios_serializer = self.get_serializer(Beneficios.objects.filter(id_name=pk), many=True)
        fijos = Fijos.objects.filter(id=pk)
        for val in fijos.iterator():
            fecha_inicial = val.date 
            id_fijos = val.id
        fecha_actual = date.today()
        meses = (fecha_actual.year - fecha_inicial.year) * 12 + fecha_actual.month - fecha_inicial.month
        Beneficios = Beneficios.objects.filter(id_name=pk)
        if Beneficios.count() == 0:
            pass
        else:
            Beneficios.objects.filter(id_name=pk).delete()
        for f in range (meses):
            print('mes')
            un_mes = fecha_inicial + relativedeltda(months=+1)
            fecha_inicial = un_mes
            salario_mensual = 130
            salario_diario = salario_mensual/30
            round_salario = round(salario_diario, 2)
            utilidades_diario = round (salario_diario * ((90/12)/30), 2)
            bono_vacional_diario = round (salario_diario * 90/12/30, 2)
            salario_integral = round (salario_diario + utilidades_diario + bono_vacional_diario, 2)
            dias_prestaciones = 0
            apartado_mensual = round (salario_integral * dias_prestaciones, 2)
            acumulado = 0 
            tasa = 0 
            anticipo = 0
            intereses= 0
            intereses_prestaciones = round ((acumulado * tasa) / (360*30), 2)
            b = Beneficios(salario_basico_mensual=salario_mensual,salario_basico_diario=round_salario, utilidades_diario=utilidades_diario,
                    bono_vacional_diario=bono_vacional_diario,salario_integral_diario=salario_integral,dias_prestaciones=dias_prestaciones,
                    apartado_mensual=apartado_mensual, anticipo=anticipo, acumulado=acumulado,tasa=tasa,intereses=intereses, 
                    intereses_prestaciones=intereses_prestaciones,datefin=fecha_inicial, id_name = None)
            b.save()
            b2 = Beneficios.objects.filter(id_name=None)
            for val in fijos.iterator():
                for y in b2:  
                    y.id_name = val  
                    y.save()
        
        data = {
            "total": self.get_queryset().count(),
            "totalNotFiltered": self.get_queryset().count(),
            "rows": Beneficios_serializer.data
        } 
        return Response(data, status=status.HTTP_200_OK)

    def create(self, request):
        # send information to serializer 
        serializer = self.serializer_class(data=request.data)    
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Empleado fijo creado correctamente!'}, status=status.HTTP_201_CREATED)
        return Response({'message':'', 'error':serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, pk=None):
        if self.get_queryset(pk):
            # send information to serializer referencing the instance
            Beneficios_serializer = self.serializer_class(self.get_queryset(pk), data=request.data)            
            if Beneficios_serializer.is_valid():
                Beneficios_serializer.save()
                return Response({'message':'empleado fijo actualizado correctamente!'}, status=status.HTTP_200_OK)
            return Response({'message':'', 'error':Beneficios_serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk=None):
        Beneficios = self.get_queryset().filter(id=pk).first() # get instance        
        if Beneficios:
            Beneficios.state = False
            Beneficios.save()
            return Response({'message':'empleado fijo eliminado correctamente!'}, status=status.HTTP_200_OK)
            return Response({'error':'No existe un empleado fijo con estos datos!'}, status=status.HTTP_400_BAD_REQUEST)