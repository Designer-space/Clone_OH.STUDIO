import React from 'react'

const ProjectDetails = (props) => {
  return (
    <div className="w-full flex md:py-5">
      <div className="w-full flex flex-col items-start place-content-start space-y-2">
        <span className='font-secondary font-medium text-accent-900/60 '>Client</span>
        <p className='font-primary text-accent-900/90'>{props.client}</p>
      </div>
      <div className="w-full flex flex-col items-start place-content-start space-y-2">
        <span className='font-secondary font-medium text-accent-900/60'>Studio</span>
        <p className='font-primary text-accent-900/90'>{props.studio}</p>
      </div>
      <div className="w-full flex flex-col items-start place-content-start space-y-2">
        <span className='font-secondary font-medium text-accent-900/60'>Role</span>
        <p className='font-primary text-accent-900/90'>{props.role}</p>
      </div>
      <div className="w-full flex flex-col items-start place-content-start space-y-2">
        <span className='font-secondary font-medium text-accent-900/60'>Focus</span>
        <p className='font-primary text-accent-900/90'>{props.focus}</p>
      </div>
    </div>
  )
}

export default ProjectDetails