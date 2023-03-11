import React, { useState } from 'react'


const ConvoBanner = () => {

  let [popupTest, setPopupTest] = useState(true)
  let [stringName, setStringName] = useState('chat-popup-unread')
  let [messages, setMessages] = useState({
    name: "Hamza",
    message: "Hello, how are you doing?"
  })

  /*currently not used, will be used when useEffect comes in.*/
  // let [popUp, setpopUp] = useState(true)


  const handleOnClick = (event: any) => {
    // setPopupTest(!popupTest)
    setStringName('chat-popup-read')
  }
 
  return (
    <div className="convo-section">
      { popupTest &&
        <div
          className={stringName}
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