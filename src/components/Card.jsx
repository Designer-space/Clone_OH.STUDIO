import React from 'react'
import arrow from '../assets/images/arrow.svg'
import { NavLink } from 'react-router-dom'

const Card = ({ img, title, type }) => {
  const filetype = type
  return (
    <>
      <NavLink to={`/Profile/project/${title}`}>
        <div className='group overflow-hidden relative rounded-xl font-primary mt-5 md:mt-0 h-full'>
          <div className="w-full h-full">
            {
              filetype === "webp" ? <img src={ img } alt={title} className='object-cover w-full h-full' loading='lazy' /> : <video src={ img } className='object-cover w-full h-full' autoPlay loop muted playsInline></video>
            }
          </div>
          <div className="absolute inset-0 bg-accent-900/25 backdrop-blur-md opacity-0 md:group-hover:opacity-100 duration-300 px-6 py-4 flex justify-between">
            <p className='opacity-0 md:group-hover:opacity-100 delay-75 duration-300 transition-all text-accent-100 font-medium self-start'> {title} </p>
            <div className="p-3 bg-accent-100 w-max rounded-full self-start -translate-x-6 translate-y-6 opacity-0 md:group-hover:translate-x-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 duration-500">
              <img src={arrow} alt="" />
            </div>
          </div>
        </div>
        <div className='md:hidden  text-sm text-accent-900 font-medium py-2'>{title}</div>
      </NavLink>
    </>
  )
}

export default Card