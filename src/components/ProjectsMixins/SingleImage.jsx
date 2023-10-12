import React from 'react'

const SingleImage = (props) => {
  return (
    <div className="pointer-events-none select-none rounded-xl">
      <img src={props.projectItem} alt="" className='pointer-events-none select-none rounded-xl w-full h-full object-cover ' />
    </div>
  )
}

export default SingleImage