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
        return Response([
  {
    "name": "hamza",
    "message": "hello"
  },
  {
    "name": "hamza",
    "message": "how are you?"
  },
  {
    "name": "hamza",
    "message": "how is it going?"
  },
  {
    "name": "hamza",
    "message": "what are you up to?"
  },
  {
    "name": "hamza",
    "message": "testing to see if this works"
  }
], status=status.HTTP_200_OK)


