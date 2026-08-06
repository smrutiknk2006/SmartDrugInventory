from django.contrib import admin

from .models import Alert


@admin.register(Alert)
class AlertAdmin(admin.ModelAdmin):

    list_display = (
        "medicine",
        "alert_type",
        "message",
        "is_read",
        "created_at",
    )

    list_filter = (
        "alert_type",
        "is_read",
        "created_at",
    )

    search_fields = (
        "medicine__name",
        "message",
    )

    ordering = (
        "-created_at",
    )

    readonly_fields = (
        "created_at",
    )