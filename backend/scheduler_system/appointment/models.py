from datetime import date
from django.db import models

# Create your models here.
class appointment(models.Model):
    task= models.CharField(max_length = 150)
    tasktype=models.BooleanField(default=False)
    taskdate=models.DateField()
    taskduration=models.BigIntegerField(default=1)

    def __str__(self):
        return self.task

    