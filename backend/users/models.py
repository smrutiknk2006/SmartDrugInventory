from django.db import models

from django.contrib.auth.models import AbstractUser


class User(AbstractUser):

    ADMIN = "ADMIN"
    SUPPLIER = "SUPPLIER"
    WAREHOUSE = "WAREHOUSE"
    HOSPITAL = "HOSPITAL"

    ROLE_CHOICES = [
        (ADMIN, "Admin"),
        (SUPPLIER, "Supplier"),
        (WAREHOUSE, "Warehouse Manager"),
        (HOSPITAL, "Hospital"),
    ]

    role = models.CharField(
        max_length=20,
        choices=ROLE_CHOICES,
        default=HOSPITAL
    )

    phone = models.CharField(
        max_length=15,
        blank=True,
        null=True
    )

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.username

# Create your models here.
