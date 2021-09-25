from django.contrib import admin
from django.conf.urls import url
from django.urls import path, include
from graphene_django.views import GraphQLView
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path('admin/', admin.site.urls),
    path('graphql/', csrf_exempt(GraphQLView.as_view(graphiql=True))),
]

urlpatterns = [url(r'^api/', include(urlpatterns))]