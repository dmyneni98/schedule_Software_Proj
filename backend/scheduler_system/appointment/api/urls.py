from django.urls import path
from .views import AppointmentListView, AppointmentDetailView, AppointmentCreateView

urlpatterns = [
    path('', AppointmentListView.as_view()),
    path('create/', AppointmentCreateView.as_view()),
    path('<pk>', AppointmentDetailView.as_view()),
]
