import React, { useState } from 'react'
import Conversation from './Conversation'

const ConvoBanner = () => {

  let [messageStatus, setMessageStatus] = useState('chat-popup-unread')
  let [messages, setMessages] = useState({
    name: "Hamza",
    message: "Hello, how are you doing?"
  })
  let [renderConversation, setRenderConversation] = useState(false)


  const handleOnClick = (event: any) => {
    setMessageStatus('chat-popup-read')
    setRenderConversation(!renderConversation)
    if (!renderConversation) setMessageStatus('chat-popup-unread')
  }

  return (
    <>
      <div className="left-convo-section">
        <div
          className={messageStatus}
          onClick={handleOnClick}
        >
          <div className="chat-name">
            {messages.name}
          </div>
          <div className="chat-message">
            {messages.message}
          </div>
        </div>
      </div>
    </>
  )

}


export default ConvoBanner