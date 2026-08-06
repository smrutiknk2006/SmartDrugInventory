from django.db import models


class Medicine(models.Model):

    name = models.CharField(max_length=200)

    generic_name = models.CharField(max_length=200)

    category = models.CharField(max_length=100)

    manufacturer = models.CharField(max_length=200)

    description = models.TextField(blank=True)

    unit = models.CharField(
        max_length=50,
        default="tablet"
    )

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
