from django.urls import path

from . import views

urlpatterns = [
    path("friendposts/", views.FriendPostListCreate.as_view(), name="friendpost-list"),
    path("friendposts/delete/<int:pk>", views.FriendPostDelete.as_view(), name="friendpost-delete")

]
