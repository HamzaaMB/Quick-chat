import React, { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';



const Conversation = () => {

  // let [renderConvo, setRenderConvo] = useState(false)

  return (
    <>
      {/* {renderConvo &&  */}
      <div className="right-convo-section">
        <div className="convo-name-holder">
          <div className="avatar-holder">
            <Stack direction="row">
              <Avatar />
            </Stack>
          </div>
          <div className="settings-container">
            <MoreVertIcon />
          </div>
        </div>
        <div className="convo-detail-holder">
          <div className="convo-bubble-container">
            <div className="left-convo-bubble">
              <p className="left-bubble">
                Hello
              </p>
            </div>
            <div className="right-convo-bubble">
              <p className="right-bubble">
                Hi
              </p>
            </div>
          </div>
          <div className="convo-input-container">
            <input className="message-input" type="text">
            </input>
          </div>
        </div>
      </div>
      {/* } */}
    </>
  )


}

export default Conversation