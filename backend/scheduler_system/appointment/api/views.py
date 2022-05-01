from rest_framework.generics import ListAPIView,RetrieveAPIView
from appointment.models import appointment
from .serializers import AppointmentSerializer 

class AppointmentListView(ListAPIView):
    queryset=appointment.objects.all()
    serializer_class=AppointmentSerializer

class AppointmentDetailView(RetrieveAPIView):
    queryset=appointment.objects.all()
    serializer_class=AppointmentSerializer
