# Generated by Django 4.0.5 on 2022-06-12 16:22

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Historical',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('state', models.BooleanField(default=True, verbose_name='Estado')),
                ('created_date', models.DateField(verbose_name='Fecha de Creacion')),
                ('modified_date', models.DateField(auto_now=True, verbose_name='Fecha de Modificacion')),
                ('delete_date', models.DateField(auto_now=True, verbose_name='Fecha de Eliminacion')),
                ('Payroll', models.CharField(max_length=150, unique=True, verbose_name='Calculo de nomina')),
                ('marketing', models.CharField(blank=True, max_length=255, null=True, verbose_name='Departamento Mercadeo')),
                ('sales', models.CharField(max_length=150, unique=True, verbose_name='Departamento Ventas')),
                ('finance', models.CharField(max_length=150, unique=True, verbose_name='Departamento Finanzas')),
                ('human_Resources', models.CharField(max_length=150, unique=True, verbose_name=' Departamento Recursos Humanos')),
            ],
            options={
                'verbose_name': 'Modelo Base',
                'verbose_name_plural': 'Modelos Base',
                'abstract': False,
            },
        ),
    ]