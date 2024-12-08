from django.contrib import admin
from .models import Music, Comment  # Import your models

# Customizing the Music admin display
class MusicAdmin(admin.ModelAdmin):
    list_display = ('title', 'artist', 'genre', 'upload_date')  # Columns to display
    search_fields = ('title', 'artist__username', 'genre')  # Enable search
    list_filter = ('genre', 'upload_date')  # Enable filters
    date_hierarchy = 'upload_date'  # Enable date-based navigation

# Customizing the Comment admin display
class CommentAdmin(admin.ModelAdmin):
    list_display = ('user', 'music', 'content', 'created_at')  # Columns to display
    search_fields = ('user__username', 'music__title', 'content')  # Enable search
    list_filter = ('created_at',)  # Enable filters
    date_hierarchy = 'created_at'  # Enable date-based navigation

# Register models
admin.site.register(Music, MusicAdmin)
admin.site.register(Comment, CommentAdmin)
