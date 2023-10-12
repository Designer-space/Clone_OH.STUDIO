import React from 'react'

const SingleVideo = (props) => {
  return (
    <div className="pointer-events-none select-none rounded-xl">
      <video src={props.projectItem} autoPlay loop muted className='pointer-events-none select-none rounded-xl w-full h-full object-cover' ></video>
    </div>
  )
}

export default SingleVideo