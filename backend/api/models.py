from django.db import models
from django.contrib.auth.models import User


class Post(models.Model):
    title = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now=True)
    content = models.TextField()
    status = models.CharField()
    #image =  Add a way to store images in the browser and inherit it here soon. For now we'll live without pictures
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="posts")
    
    def __str__(self):
        return self.title
    
    
class Comment(models.Model):
    PostID = models.ForeignKey(Post, on_delete=models.CASCADE, related_name="comments") #possibli will need to change on_delete
