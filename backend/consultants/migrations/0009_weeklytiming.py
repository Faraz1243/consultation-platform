# Generated by Django 4.2 on 2025-01-22 10:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('consultants', '0008_alter_consultant_cnic_back_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='WeeklyTiming',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('day', models.CharField(choices=[('Monday', 'Monday'), ('Tuesday', 'Tuesday'), ('Wednesday', 'Wednesday'), ('Thursday', 'Thursday'), ('Friday', 'Friday'), ('Saturday', 'Saturday'), ('Sunday', 'Sunday')], max_length=10)),
                ('start_time', models.TimeField(blank=True, null=True)),
                ('end_time', models.TimeField(blank=True, null=True)),
                ('is_closed', models.BooleanField(default=False)),
                ('consultant', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='weekly_timings', to='consultants.consultant')),
            ],
        ),
    ]
