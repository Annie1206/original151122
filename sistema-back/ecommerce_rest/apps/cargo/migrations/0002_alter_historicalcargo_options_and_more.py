# Generated by Django 4.1 on 2022-08-09 23:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cargo', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='historicalcargo',
            options={'get_latest_by': ('history_date', 'history_id'), 'ordering': ('-history_date', '-history_id'), 'verbose_name': 'historical Modelo Base', 'verbose_name_plural': 'historical Modelos Base'},
        ),
        migrations.AlterField(
            model_name='historicalcargo',
            name='history_date',
            field=models.DateTimeField(db_index=True),
        ),
    ]
