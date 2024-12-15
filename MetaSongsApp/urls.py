from django.urls import path
from .views import MusicListCreateAPIView, MusicDetailAPIView, CommentListCreateAPIView
from . import views

urlpatterns = [
    path('music/', MusicListCreateAPIView.as_view(), name='music-list-create'),
    path('music/<int:pk>/', MusicDetailAPIView.as_view(), name='music-detail'),
    path('comments/', CommentListCreateAPIView.as_view(), name='comment-list-create'),
    path('playlists/', views.playlist_list, name='playlist_list'),
    path('playlists/<int:id>/', views.playlist_detail, name='playlist_detail'),
    path('playlists/create/', views.playlist_create, name='playlist_create'),
]