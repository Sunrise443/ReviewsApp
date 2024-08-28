from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny

from .serializers import UserSerealizer, PostSerealizer
from .models import Post

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all() #so we don't create a user that already exists
    serializer_class = UserSerealizer
    permission_classes = [AllowAny]

class FriendPostListCreate(generics.CreateAPIView):
    spesializer_class = PostSerealizer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        #user = self.request.user
        return Post.objects.all #for an owner note just add a .filter(status=owner)
    
    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user, status="friend")
        else:
            print(serializer.errors)
            
        return super().perform_create(serializer)

class FriendPostDelete(generics.DestroyAPIView):
    serializer_class = PostSerealizer
    parser_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Post.objects.all.filter(author=user) #or status=owner
