from django.db import models

class User_Model(models.Model):
    class Meta:
        db_table = 'User'

    user_id = models.CharField(
        verbose_name='user_id',
        blank=True,
        null=True,
        max_length=225,
    )

    user_name = models.CharField(
        verbose_name='user_name',
        blank=True,
        null=True,
        max_length=225
    )

    user_email = models.CharField(
        verbose_name='user_email',
        blank=True,
        null=True,
        max_length=225
    )

    def __str__(self):
        return self.user_id
