from django.db import models
from purchase_orders.models import PurchaseOrder


class Shipment(models.Model):

    STATUS_CHOICES = [
        ("PREPARING", "Preparing"),
        ("SHIPPED", "Shipped"),
        ("IN_TRANSIT", "In Transit"),
        ("DELIVERED", "Delivered"),
        ("CANCELLED", "Cancelled"),
    ]

    purchase_order = models.OneToOneField(
        PurchaseOrder,
        on_delete=models.CASCADE,
        related_name="shipment"
    )

    tracking_number = models.CharField(
        max_length=100,
        unique=True
    )

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default="PREPARING"
    )

    shipped_date = models.DateTimeField(
        null=True,
        blank=True
    )

    expected_delivery = models.DateTimeField(
        null=True,
        blank=True
    )

    delivered_date = models.DateTimeField(
        null=True,
        blank=True
    )

    def __str__(self):
        return self.tracking_number
