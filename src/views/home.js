import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Customer Implementation Developer</title>
        <meta property="og:title" content="Customer Implementation Developer" />
      </Helmet>
    </div>
  )
}

export default Home
