from datetime import date
import datetime
from xmlrpc.client import DateTime
from django.db import models
from django.forms import DateTimeInput

# Create your models here.


class appointment(models.Model):
    title = models.CharField(default='Current', max_length=150)
    tasktype = models.CharField(default='soft', max_length=150)
    startDate = models.CharField(default='Current', max_length=150)
    endDate = models.CharField(default='Current', max_length=150)
   # StartTime = models.DateTimeField(auto_now=True, null=True)
   # EndTime = models.DateTimeField(auto_now=True, null=True)

    def __str__(self):
        return self.title
