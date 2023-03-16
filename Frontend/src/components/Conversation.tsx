import React, { useState, useEffect } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';



const Conversation = (data: any) => {

  console.log('props', data)


  return (
    <>
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
            {
              data.data.map((x: any) => {
                return <p className="left-message-bubble">
                    <p className="left-conversation-bubble">
                      {x.message}
                    </p>
                </p>
              })}
            {
              data.dataTwo.map((x: any) => {
                return <p className="right-message-bubble">
                    <p className="left-conversation-bubble">
                      {x.message}
                    </p>
                  </p>
              })}
          </div>
          <div className="convo-input-container">
            <input className="message-input" type="text"></input>
          </div>
        </div>
      </div>
    </>
  )
}

export default Conversation