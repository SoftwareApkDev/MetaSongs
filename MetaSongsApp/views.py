from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import Music, Comment
from .serializers import MusicSerializer, CommentSerializer
from rest_framework.permissions import IsAuthenticated

# List and Create Music
class MusicListCreateAPIView(ListCreateAPIView):
    queryset = Music.objects.all()
    serializer_class = MusicSerializer
    permission_classes = [IsAuthenticated]

# Retrieve, Update, Delete a specific Music
class MusicDetailAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Music.objects.all()
    serializer_class = MusicSerializer

# List and Create Comments for Music
class CommentListCreateAPIView(ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    # Filter comments by music (GET: ?music=1)
    def get_queryset(self):
        queryset = super().get_queryset()
        music_id = self.request.query_params.get('music')
        if music_id:
            queryset = queryset.filter(music_id=music_id)
        return queryset
