from django.urls import path
from server.apps.user.views import *

urlpatterns = [
    path('', UserDetailAPIView.as_view()),
    path('update/', UserUpdateAPIView.as_view()),
    path('login/', Login.as_view()),
    path('register/', RegisterAPI.as_view()),
    path('change_password/', PasswordChangeAPI.as_view()),
]
