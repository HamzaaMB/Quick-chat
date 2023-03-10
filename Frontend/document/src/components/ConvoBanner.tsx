import React, { useState } from 'react'


const ConvoBanner = () => {

  let [popupTest, setPopupTest] = useState(true)
  

  /*currently not used, will be used when useEffect comes in.*/
  // let [popUp, setpopUp] = useState(true)

  
  const handleOnClick = (event: any) => {
    setPopupTest(!popupTest)
    
  }


  return (
    <div className="convo-section">
      { popupTest &&
        <div
          className="chat-popup"
          onClick={handleOnClick}
        >
          <div className="chat-name">
            Hamster
      </div>
          <div className="chat-message">
            hi, hello, how are you
      </div>
        </div>
  }
    </div>

  )

}


export default ConvoBanner