from django.contrib.auth.models import User
from rest_framework import serializers

from .models import Post

class UserSerealizer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}} #so noone can read what password is

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
    
class PostSerealizer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ["id", "title", "created_at", "content", "author"]
        extra_kwargs = {"author": {"read_only": True}}
