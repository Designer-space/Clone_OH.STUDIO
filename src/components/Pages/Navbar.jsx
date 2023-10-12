import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="h-28">
        <header aria-label='primary-navigation' className='fixed top-8 left-[50%] -translate-x-1/2 z-10 font-secondary'>
          <nav id="primary-navigation" className=' backdrop-blur-2xl bg-accent-200/50 px-1 rounded-full flex items-center p-1 gap-1 text-sm font-medium'>
            <NavLink to="/">
              <div className='py-2 px-6 '>Home</div>
            </NavLink>
            <NavLink to="/Profile">
              <div className='py-2 px-6 '>Profile</div>
            </NavLink>
            <NavLink to="/Contact">
              <div className='py-2 px-6 '>Contact</div>
            </NavLink>
          </nav>
        </header>
      </div>
    </>
  )
}

export default Navbar