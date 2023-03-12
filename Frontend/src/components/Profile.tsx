import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';



const profile = () => {

  return (
  <>
    <div className="profile-section">
      <div className="profile-container">
        <div className="profile-banner">
          <Stack direction="row">
            <Avatar />
          </Stack>
        </div>
      </div>
      <div className="settings-container">
        <MoreVertIcon />
      </div>
    </div>
  </>
  )

}

export default profile 