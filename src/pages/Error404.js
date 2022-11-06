import React from 'react'
import { Link } from 'react-router-dom'
import './error.css'

export const Error404 = () => {
  return (
    <>
      <div className='errorContainer'>
        <div className='text'>
          <h2>404 Error</h2>
          <h4>Ooops....This page does not exist</h4>
          <Link to="/">
            <button className="goBack">Go to Homepage</button>
          </Link>
        </div>
        <div className="error">
            <img src="./images/errorpage.svg" alt=""/>
        </div>
      </div>
    </>
  )
}
