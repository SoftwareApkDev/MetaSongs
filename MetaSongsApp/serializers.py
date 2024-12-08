from rest_framework import serializers
from .models import Music, Comment

class MusicSerializer(serializers.ModelSerializer):
    artist = serializers.StringRelatedField()  # Show artist username
    class Meta:
        model = Music
        fields = ['id', 'title', 'artist', 'genre', 'description', 'file', 'upload_date']

class CommentSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField()  # Show user username
    music = serializers.StringRelatedField()  # Show music title
    class Meta:
        model = Comment
        fields = ['id', 'user', 'music', 'content', 'created_at']