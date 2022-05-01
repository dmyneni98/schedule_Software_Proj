from rest_framework import serializers
from appointment.models import appointment

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model=appointment
        fields =('task','tasktype','taskdate','taskduration')