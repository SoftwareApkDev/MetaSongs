from rest_framework.views import APIView
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import Music, Comment, Playlist
from .serializers import MusicSerializer, CommentSerializer, PlaylistSerializer
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


@api_view(['GET'])
def playlist_list():
    try:
        # Fetch all playlists from the database
        playlists = Playlist.objects.all()
        # Serialize the data
        serializer = PlaylistSerializer(playlists, many=True)
        # Return the serialized data as a JSON response
        return Response(serializer.data)
    except Exception as e:
        # Return an error response for debugging
        return Response({'error': str(e)}, status=500)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_playlists(request):
    playlists = Playlist.objects.filter(user=request.user)
    serializer = PlaylistSerializer(playlists, many=True)
    return Response(serializer.data)


@api_view(['GET', 'PUT', 'DELETE'])
def playlist_detail(request, id):
    try:
        # Retrieve the playlist by ID
        playlist = Playlist.objects.get(pk=id)
    except Playlist.DoesNotExist:
        # Return a 404 response if not found
        return Response({'error': 'Playlist not found'}, status=status.HTTP_404_NOT_FOUND)

    # Handle GET request: Return playlist details
    if request.method == 'GET':
        serializer = PlaylistSerializer(playlist)
        return Response(serializer.data)

    # Handle PUT request: Update playlist details
    elif request.method == 'PUT':
        serializer = PlaylistSerializer(playlist, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # Handle DELETE request: Delete the playlist
    elif request.method == 'DELETE':
        playlist.delete()
        return Response({'message': 'Playlist deleted successfully'}, status=status.HTTP_204_NO_CONTENT)


@api_view(['POST'])
def playlist_create(request):
    serializer = PlaylistSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
