from django.db import models
from django.contrib.auth.models import User

# Music model
class Music(models.Model):
    title = models.CharField(max_length=255)
    artist = models.ForeignKey(User, on_delete=models.CASCADE)  # Link to a User
    genre = models.CharField(max_length=50)
    description = models.TextField(blank=True, null=True)
    file = models.FileField(upload_to="uploads/music/")  # Where files are stored
    upload_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title  # Display title in admin panel


# Comment model
class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)  # Link to a User
    music = models.ForeignKey(Music, on_delete=models.CASCADE, related_name="comments")
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username}: {self.music.title}"
