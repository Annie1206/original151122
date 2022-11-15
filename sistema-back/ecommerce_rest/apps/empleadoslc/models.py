from django.db import models
from simple_history.models import HistoricalRecords

from apps.base.models import BaseModel

#Personal Fijo

class Empleadoslc(BaseModel):

    CI = models.CharField('Cedula', max_length = 10, blank = True, null = True)
    name = models.CharField('Nombre', max_length=50, unique= True, blank = False, null = False)
    last_name = models.CharField('Apellidos', max_length = 50, blank = True, null = True)
    position = models.CharField('Cargo', max_length=50, unique= False, blank = False, null = False)
    address = models.CharField('Direccion', max_length = 150, blank = True, null = True)
    num = models.CharField('Telefono', max_length=20, unique= True, blank = False, null = False)
    date = models.DateField('Fecha de ingreso', unique= False, blank = False, null = True )
    salariobase = models.FloatField('Salario Base', unique = False, blank = False, null = False)
    historical = HistoricalRecords()


    @property
    def _history_user(self):
        return self.changed_by

    @_history_user.setter
    def _history_user(self, value):
        self.changed_by = value

        