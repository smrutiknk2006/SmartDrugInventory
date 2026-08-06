from django.db import models
from medicines.models import Medicine


class Alert(models.Model):

    ALERT_CHOICES = [
        ("LOW_STOCK", "Low Stock"),
        ("EXPIRY", "Expiry Warning"),
        ("OUT_OF_STOCK", "Out of Stock"),
    ]

    medicine = models.ForeignKey(
        Medicine,
        on_delete=models.CASCADE,
        related_name="alerts"
    )

    alert_type = models.CharField(
        max_length=30,
        choices=ALERT_CHOICES
    )

    message = models.TextField()

    is_read = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.alert_type} - {self.medicine.name}"
# Create your models here.
