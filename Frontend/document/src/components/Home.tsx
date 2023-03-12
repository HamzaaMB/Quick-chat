import React, { useState } from 'react';
import Conversation from './Conversation';
import Profile from './Profile'


const Home = () => {

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
      <section className="main-page">
        <div className="home-page">
          <div className="left-section-container">
            <div className="left-section">
              <Profile />
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
            </div>
          </div>
          <div className="right-section">
            {renderConversation && <Conversation />
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Home