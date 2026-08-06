from django.db import models
from django.conf import settings
from medicines.models import Medicine


class Inventory(models.Model):

    LOCATION_CHOICES = [
        ("HOSPITAL", "Hospital"),
        ("WAREHOUSE", "Warehouse"),
    ]

    medicine = models.ForeignKey(
        Medicine,
        on_delete=models.CASCADE,
        related_name="inventory"
    )

    location_user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="inventory"
    )

    location_type = models.CharField(
        max_length=20,
        choices=LOCATION_CHOICES
    )

    batch_number = models.CharField(max_length=100)

    quantity = models.PositiveIntegerField(default=0)

    reorder_level = models.PositiveIntegerField(default=10)

    expiry_date = models.DateField()

    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.medicine.name} - {self.batch_number}"

    class Meta:
        verbose_name = "Inventory"
        verbose_name_plural = "Inventories"

class StockTransaction(models.Model):

    TRANSACTION_CHOICES = [
        ("IN", "Stock In"),
        ("OUT", "Stock Out"),
        ("TRANSFER", "Transfer"),
    ]

    medicine = models.ForeignKey(
        Medicine,
        on_delete=models.CASCADE,
        related_name="stock_transactions"
    )

    performed_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        blank=True
    )

    transaction_type = models.CharField(
        max_length=20,
        choices=TRANSACTION_CHOICES
    )

    quantity = models.PositiveIntegerField()

    reference = models.CharField(
        max_length=200,
        blank=True
    )

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.medicine.name} - {self.transaction_type}"

