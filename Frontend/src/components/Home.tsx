import React, { useState } from 'react';
import Conversation from './Conversation';
import Profile from './Profile'


const Home = () => {
  /*Changes css class from 'unread' to 'read' upon clicking the message in the left panel*/
  let [messageStatus, setMessageStatus] = useState('chat-popup-unread')

  /*Endpoint required for messages*/
  let [messages, setMessages] = useState([
    {
    name: "Hamza",
    message: "Bonjour, comment ca va?"
    },
  {
    name: "Hamza",
    message: "ca va?"
  }
  ])

  let [messagesTwo, setMessagesTwo] = useState([
    {
    name: "Issra",
    message: "Bonjour, ca va! Et toi?"
    },
    {
    name: "Issra",
    message: "ca va! Et toi?"
    }
])

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
                    {messages[0].name}
                  </div>
                  <div className="chat-message">
                    {messages[0].message}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right-section">
            {renderConversation ? <Conversation dataTwo ={messagesTwo} data={messages} /> : <h1>Select a conversation</h1>
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Home