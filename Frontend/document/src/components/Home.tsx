import React, { useState } from 'react';
import Conversation from './Conversation';
import ConvoBanner from './ConvoBanner';
import Profile from './Profile'


const Home = () => {

  return (
    <>

      <section className="main-page">
        <div className="home-page">
          <div className="left-section-container">
            <div className="left-section">
              <Profile />
              <ConvoBanner />
            </div>
          </div>
          <div className="right-section">
            <Conversation />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home