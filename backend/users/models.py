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


class HospitalProfile(models.Model):
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        related_name="hospital_profile"
    )
    hospital_name = models.CharField(max_length=200)
    address = models.TextField()

    def __str__(self):
        return self.hospital_name


class SupplierProfile(models.Model):
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        related_name="supplier_profile"
    )
    company_name = models.CharField(max_length=200)
    address = models.TextField()

    def __str__(self):
        return self.company_name


class WarehouseProfile(models.Model):
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        related_name="warehouse_profile"
    )
    warehouse_name = models.CharField(max_length=200)
    address = models.TextField()

    def __str__(self):
        return self.warehouse_name