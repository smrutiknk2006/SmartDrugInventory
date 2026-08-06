from django.contrib import admin

from .models import Shipment


@admin.register(Shipment)
class ShipmentAdmin(admin.ModelAdmin):

    list_display = (
        "tracking_number",
        "purchase_order",
        "status",
        "shipped_date",
        "expected_delivery",
        "delivered_date",
    )

    list_filter = (
        "status",
        "shipped_date",
        "expected_delivery",
    )

    search_fields = (
        "tracking_number",
        "purchase_order__id",
        "purchase_order__supplier__company_name",
    )

    ordering = (
        "-shipped_date",
    )