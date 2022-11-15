from rest_framework import serializers

from apps.empleadoslc.models import Empleadoslc

class EmpleadoslcSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Empleadoslc
        exclude = ('state','created_date','modified_date','delete_date')


    def to_representation(self,instance):
          return {
            'id': instance.id,
            'CI': instance.CI,
            'name': instance.name,
            'last_name': instance.last_name,
            'position': instance.position,
            'address': instance.address,
            'num': instance.num,
            'date': instance.date,
            'salariobase': instance.salariobase

        }
class EmpleadoslcRetrieveSerializer(serializers.ModelSerializer):

    class Meta:
        model = Empleadoslc
        exclude = ('state','created_date','modified_date','delete_date')