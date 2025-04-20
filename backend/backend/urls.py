from django.contrib import admin
from django.urls import path, include
from api import views as api_views

urlpatterns = [
    path("admin/", admin.site.urls),
    path("app/", include('app.urls')),
    path("api/", include(api_views.router.urls))
]
