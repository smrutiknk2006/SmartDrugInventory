from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import (
    User,
    HospitalProfile,
    SupplierProfile,
    WarehouseProfile,
)


@admin.register(User)
class CustomUserAdmin(UserAdmin):
    add_fieldsets = (
    (
        None,
        {
            "classes": ("wide",),
            "fields": (
                "username",
                "password1",
                "password2",
                "role",
                "phone",
            ),
        },
    ),
)

    list_display = (
        "username",
        "email",
        "role",
        "phone",
        "is_staff",
        "is_active",
        "created_at",
    )

    list_filter = (
        "role",
        "is_staff",
        "is_active",
    )

    search_fields = (
        "username",
        "email",
        "phone",
    )

    fieldsets = UserAdmin.fieldsets + (
        (
            "Project Information",
            {
                "fields": (
                    "role",
                    "phone",
                    "created_at",
                )
            },
        ),
    )

    readonly_fields = (
        "created_at",
    )


@admin.register(HospitalProfile)
class HospitalProfileAdmin(admin.ModelAdmin):

    list_display = (
        "hospital_name",
        "user",
        "address",
    )

    search_fields = (
        "hospital_name",
        "user__username",
        "user__email",
    )


@admin.register(SupplierProfile)
class SupplierProfileAdmin(admin.ModelAdmin):

    list_display = (
        "company_name",
        "user",
        "address",
    )

    search_fields = (
        "company_name",
        "user__username",
        "user__email",
    )


@admin.register(WarehouseProfile)
class WarehouseProfileAdmin(admin.ModelAdmin):

    list_display = (
        "warehouse_name",
        "user",
        "address",
    )

    search_fields = (
        "warehouse_name",
        "user__username",
        "user__email",
    )
