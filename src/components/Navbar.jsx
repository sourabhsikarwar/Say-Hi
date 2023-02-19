import React from 'react'
import logo from '../assets/Images/logo4.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'><img src={logo} alt="logo" /></span>
      <div className='user'>
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" alt="" />
        <span>Sourabh</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar