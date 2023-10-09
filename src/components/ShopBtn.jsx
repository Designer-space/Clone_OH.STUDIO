import React from 'react'
import Logo from "../assets/images/logo.svg"

const ShopBtn = () => {
  return (
    <a href='#' className='fixed bottom-8 left-2/4 -translate-x-1/2 bg-accent-900 w-max px-5 py-[10px] rounded-full'>
      <div className="flex items-center gap-2">
        <div className="w-[12px] ">
        <img src={Logo} alt=''  className=""/>
        </div>
        <div className="">
        <p className='text-accent-100 text-sm font-medium'>Shop</p>
        </div>
      </div>
    </a>
  )
}

export default ShopBtn