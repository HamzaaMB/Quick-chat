# from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Message
from .serializers.common import MessageSerializer

class MessageView(APIView):
    def get(self, _request):
        messages = Message.objects.all()
        serialized_messages = MessageSerializer(messages, many=True)
        return Response('hello', status=status.HTTP_200_OK)


