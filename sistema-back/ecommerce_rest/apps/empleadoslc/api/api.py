from rest_framework import status
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.parsers import JSONParser, MultiPartParser
from apps.empleadoslc.models import Empleadoslc
from apps.empleadoslc.api.serializers import EmpleadoslcSerializer, EmpleadoslcRetrieveSerializer


class EmpleadoslcViewSet(viewsets.ModelViewSet):
    serializer_class = EmpleadoslcSerializer
    parser_classes = (JSONParser, MultiPartParser, )

    def get_queryset(self, pk=None):
        if pk is None:
            return self.get_serializer().Meta.model.objects.filter(state=True)
        return self.get_serializer().Meta.model.objects.filter(id=pk, state=True).first()

    def list(self, request):
        Empleadoslc_serializer = self.get_serializer(self.get_queryset(), many=True)
        data = {
            "total": self.get_queryset().count(),
            "totalNotFiltered": self.get_queryset().count(),
            "rows": Empleadoslc_serializer.data
        }
        return Response(data, status=status.HTTP_200_OK)

    def create(self, request):
        # send information to serializer 
        serializer = self.serializer_class(data=request.data)    
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Empleado creado correctamente'}, status=status.HTTP_201_CREATED)
        return Response({'message':'', 'Error al registrar el empleado, por favor valide que los datos sean correctos.':serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        fijos = self.get_queryset(pk)
        if fijos:
            Empleadoslc_serializer = EmpleadoslcRetrieveSerializer(fijos)
            return Response(Empleadoslc_serializer.data, status=status.HTTP_200_OK)
        return Response({'error':'Empleado no existe, valide los datos suministrados.'}, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, pk=None):
        if self.get_queryset(pk):
            # send information to serializer referencing the instance
            Empleadoslc_serializer = self.serializer_class(self.get_queryset(pk), data=request.data)            
            if Empleadoslc_serializer.is_valid():
                Empleadoslc_serializer.save()
                return Response({'message':'Datos del empleado actualizados'}, status=status.HTTP_200_OK)
            return Response({'message':'', 'error':empleadoslc_serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk=None):
        empleado = self.get_queryset().filter(id=pk).first() # get instance        
        if empleado:
            empleado.state = False
            empleado.save()
            return Response({'message':'Empleado eliminado correctamente!'}, status=status.HTTP_200_OK)
            return Response({'error':'Empleado no existe, por favor validar los datos suministrados.'}, status=status.HTTP_400_BAD_REQUEST)