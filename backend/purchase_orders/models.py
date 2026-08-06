from django.db import models
from django.conf import settings
from medicines.models import Medicine
from users.models import SupplierProfile


class PurchaseOrder(models.Model):

    STATUS_CHOICES = [
        ("PENDING", "Pending"),
        ("APPROVED", "Approved"),
        ("PROCESSING", "Processing"),
        ("SHIPPED", "Shipped"),
        ("DELIVERED", "Delivered"),
        ("CANCELLED", "Cancelled"),
    ]

    supplier = models.ForeignKey(
        SupplierProfile,
        on_delete=models.CASCADE,
        related_name="purchase_orders"
    )

    created_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True
    )

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default="PENDING"
    )

    order_date = models.DateTimeField(auto_now_add=True)

    total_amount = models.DecimalField(
        max_digits=12,
        decimal_places=2,
        default=0
    )

    def __str__(self):
        return f"PO-{self.id}"


class PurchaseOrderItem(models.Model):

    purchase_order = models.ForeignKey(
        PurchaseOrder,
        on_delete=models.CASCADE,
        related_name="items"
    )

    medicine = models.ForeignKey(
        Medicine,
        on_delete=models.CASCADE,
        related_name="purchase_order_items"
    )

    quantity = models.PositiveIntegerField()

    unit_price = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )

    def __str__(self):
        return f"{self.medicine.name} - {self.quantity}"