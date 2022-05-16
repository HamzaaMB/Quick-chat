import React from 'react';
import Profile from './Profile'


const Home = () => {

  return (
    <>

      <section className="main-page">
        <div className="home-page">
          <div className="left-section">
            <Profile />
          </div>
          <div className="right-section">
          </div>
        </div>
      </section>
    </>
  )
}

export default Home