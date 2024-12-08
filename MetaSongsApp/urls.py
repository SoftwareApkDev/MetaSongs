from django.urls import path
from .views import MusicListCreateAPIView, MusicDetailAPIView, CommentListCreateAPIView

urlpatterns = [
    path('music/', MusicListCreateAPIView.as_view(), name='music-list-create'),
    path('music/<int:pk>/', MusicDetailAPIView.as_view(), name='music-detail'),
    path('comments/', CommentListCreateAPIView.as_view(), name='comment-list-create'),
]