from django.contrib import admin

from .models import PurchaseOrder, PurchaseOrderItem


class PurchaseOrderItemInline(admin.TabularInline):
    model = PurchaseOrderItem
    extra = 1


@admin.register(PurchaseOrder)
class PurchaseOrderAdmin(admin.ModelAdmin):

    list_display = (
        "id",
        "supplier",
        "created_by",
        "status",
        "order_date",
        "total_amount",
    )

    list_filter = (
        "status",
        "order_date",
    )

    search_fields = (
        "supplier__company_name",
        "created_by__username",
    )

    ordering = (
        "-order_date",
    )

    readonly_fields = (
        "order_date",
    )

    inlines = [
        PurchaseOrderItemInline,
    ]


@admin.register(PurchaseOrderItem)
class PurchaseOrderItemAdmin(admin.ModelAdmin):

    list_display = (
        "purchase_order",
        "medicine",
        "quantity",
        "unit_price",
    )

    search_fields = (
        "medicine__name",
    )
