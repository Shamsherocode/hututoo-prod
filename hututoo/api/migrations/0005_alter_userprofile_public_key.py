# Generated by Django 4.0.2 on 2022-03-07 05:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_quizs_created_at_alter_transaction_date_time'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='public_key',
            field=models.CharField(blank=True, max_length=16, null=True, unique=True),
        ),
    ]
