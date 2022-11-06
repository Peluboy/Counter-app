import React, { useState } from 'react'
import './home.css'
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import { useErrorHandler } from 'react-error-boundary'
import CounterHome from './CounterHome';

const MAX_COUNT_ALLOWED = 1

function Home() {

const [count, setCount] = useState(0)
const handleError = useErrorHandler()

const handleClick = () => {
    try {
        if (count === MAX_COUNT_ALLOWED){
            throw new Error('Count limit exceeded')
        }else{
            setCount((c) => c + 1)
        }
    } catch (e) {
        handleError(e)
    }
}


  return (
    <div className='container'>
    <Helmet>
        <title>Counter App</title>
        <meta name="description" content="React counter app using Custom Hook and useReducer" />
        <link rel='canonical' href='/'/>
    </Helmet>

    <Navbar />
    <div className='hero'>
        <div className='left'>
            <h2>Welcome to your Therapy Session</h2>
            <img src="./images/head.svg" alt="" />
            <button className='btnLearn' onClick={handleClick}>Double Click!</button>
        </div>
        <div className='right'><CounterHome /></div>
    </div>

    <div className='footer'>
        <p>© 2022 Peluboy. All Right Reserved</p>
    </div>

    </div>
  )
}

export default Home
