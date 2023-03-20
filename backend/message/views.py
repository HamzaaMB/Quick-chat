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
    "id": 1,
    "name": "hamza",
    "message": "hello"
  },
  {
    "id": 2,
    "name": "hamza",
    "message": "how are you?"
  },
  {
    "id": 3,
    "name":
      "hamza",
    "message": "how is it going?"
  },
  {
    "id": 4,
    "name": "hamza",
    "message": "what are you up to?"
  },
  {
    "id": 5,
    "name": "hamza",
    "message": "testing to see if this works"
  }
], status=status.HTTP_200_OK)


