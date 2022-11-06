import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='section'>

      <div className='menu'>
        <Link to='/'>Home</Link>
      </div>

      <div className='logo'>
        <a href="/">
            <img src="./images/altschool.svg" alt=""/>
        </a>
      </div>

      <div className='socialMedia'>
        <a href="https://twitter.com/blvckpelu/">
            <img src="./images/twitter.svg" alt=""/>
        </a>
        <a href="https://instagram.com/peluboy_designs/">
            <img src="./images/instagram.svg" alt=""/>
        </a>
        <a href="https://github.com/Peluboy">
            <img src="./images/github.svg" alt=""/>
        </a>
      </div>
    </div>
  )
}

export default Navbar
