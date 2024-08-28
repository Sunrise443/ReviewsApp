from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny

from .serializers import UserSerealizer, FriendPostSerealizer
from .models import FriendPost

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all() #so we don't create a user that already exists
    serializer_class = UserSerealizer
    permission_classes = [AllowAny]

class PostListCreate(generics.CreateAPIView):
    spesializer_class = FriendPostSerealizer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        #user = self.request.user
        return FriendPost.objects.all #for an owner note just add a .filter(status=owner)
    