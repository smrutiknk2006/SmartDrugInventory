from django.contrib import admin

from .models import Inventory, StockTransaction


@admin.register(Inventory)
class InventoryAdmin(admin.ModelAdmin):

    list_display = (
        "medicine",
        "location_user",
        "location_type",
        "batch_number",
        "quantity",
        "reorder_level",
        "expiry_date",
        "updated_at",
    )

    list_filter = (
        "location_type",
        "expiry_date",
    )

    search_fields = (
        "medicine__name",
        "medicine__generic_name",
        "batch_number",
        "location_user__username",
    )

    ordering = (
        "expiry_date",
    )

    readonly_fields = (
        "updated_at",
    )


@admin.register(StockTransaction)
class StockTransactionAdmin(admin.ModelAdmin):

    list_display = (
        "medicine",
        "transaction_type",
        "quantity",
        "performed_by",
        "reference",
        "created_at",
    )

    list_filter = (
        "transaction_type",
        "created_at",
    )

    search_fields = (
        "medicine__name",
        "performed_by__username",
        "reference",
    )

    ordering = (
        "-created_at",
    )

    readonly_fields = (
        "created_at",
    )