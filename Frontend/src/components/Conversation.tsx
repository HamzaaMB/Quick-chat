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
            <p className="left-bubble">
              {data.data.map((x: any) => {
                return <p>{x.message}</p>
              })}
            </p>
            <p className="right-bubble">
            {data.dataTwo.map((x: any) => {
                return <p>{x.message}</p>
              })}
            </p>
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