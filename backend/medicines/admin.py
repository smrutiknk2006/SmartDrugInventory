from django.contrib import admin

from .models import Medicine


@admin.register(Medicine)
class MedicineAdmin(admin.ModelAdmin):

    list_display = (
        "name",
        "generic_name",
        "category",
        "manufacturer",
        "unit",
        "created_at",
    )

    list_filter = (
        "category",
        "manufacturer",
    )

    search_fields = (
        "name",
        "generic_name",
        "manufacturer",
    )

    ordering = (
        "name",
    )

    readonly_fields = (
        "created_at",
    )
