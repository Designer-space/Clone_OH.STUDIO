import React from 'react'
import Logo from '../../assets/images/logo.svg'

const FooterSection = () => {
  return (
    <>
      <div className="max-w-[1440px] mx-auto py-6 text-sm px-12 h-min">
        <div className="flex flex-col justify-center items-center gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-2 items-center">
            <div className="w-6">
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 12 12">
                <path d="M 6 0 L 6 12 M 0 6 L 12 6 M 1.757 1.758 L 10.243 10.242 M 1.758 10.243 L 10.242 1.757" fill="transparent" strokeWidth="1.45" stroke="rgb(0,0,0)" strokeMiterlimit="10">
                  </path>
              </svg>
            </div>
          <p>© Oli Harris 2023</p>
          </div>
          <div className="flex gap-4">
            <a href="#" className='text-accent-900 font-medium hover:text-accent-400 focus:text-accent-400'>Twitter</a>
            <a href="#" className='text-accent-900 font-medium hover:text-accent-400 focus:text-accent-400'>Linkedin</a>
            <a href="#" className='text-accent-900 font-medium hover:text-accent-400 focus:text-accent-400'>Mail</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default FooterSection