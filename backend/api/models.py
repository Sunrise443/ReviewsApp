from django.db import models
from django.contrib.auth.models import User

class FriendPost(models.Model):
    title = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now=True)
    content = models.TextField()
    #image =  Add a way to store images in the browser and inherit it here soon. For now we'll live without pictures
    author = models.ForeignKey(User)

    def __str__(self):
        return self.title
