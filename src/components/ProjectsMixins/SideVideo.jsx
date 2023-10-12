import React from 'react'

const SideVideo = (props) => {
  return (
    <div className="pointer-events-none select-none rounded-xl grid grid-cols-2 gap-6">
      <div className="">
        <video src={props.projectItem1} autoPlay loop muted className='pointer-events-none select-none rounded-xl w-full h-full object-cover' ></video>
      </div>
      <div className="">
        <img src={props.projectItem2} alt="" className='pointer-events-none select-none rounded-xl w-full h-full object-cover ' />
      </div>
    </div>
  )
}

export default SideVideo