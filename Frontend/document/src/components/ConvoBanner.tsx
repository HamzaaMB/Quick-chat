import React, { useState } from 'react'


const ConvoBanner = () => {

  let [renderChat, setrenderChat] = useState(true)
  let [messageStatus, setMessageStatus] = useState('chat-popup-unread')
  let [messages, setMessages] = useState({
    name: "Hamza",
    message: "Hello, how are you doing?"
  })

  /*currently not used, will be used when useEffect comes in.*/
  // let [popUp, setpopUp] = useState(true)


  const handleOnClick = (event: any) => {
    setrenderChat(renderChat)
    if (renderChat) setMessageStatus('chat-popup-read')
    
  }

  return (
    <div className="convo-section">
      {renderChat &&
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
      }
    </div>
  )

}


export default ConvoBanner