import React from 'react'
import {Link} from "react-router-dom"
import {FaApple} from 'react-icons/fa'

import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="logo-container">
      <FaApple size={25} />
      <h1 className="logo-head">WATCH</h1>
    </div>  
    <select  className='collection-container'>
  
      <option className='option'>Apple Watch Series</option>
      <option className='option'>Apple Watch Hermes Series 10</option>
      <option className='option'>Apple Watch SE</option>
    </select> 
    <div className="nav-links">
      <p className='shopLink'><Link className='link2' to="/customize">Shop</Link></p>
      <p>Support</p>
    </div>
  </nav>
)

export default Header
