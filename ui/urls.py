from django.urls import  path
from . import  views
urlpatterns =[
    path("", views.index, name="index"),
    path("grid/", views.grid, name="grid"),
    path("charts/", views.charts, name="charts"),
    path("bar/", views.pyecharts_bar, name="bar")
]