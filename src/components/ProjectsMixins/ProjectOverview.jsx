import React from 'react'

const ProjectOverview = (props) => {
  return (
    <div className="my-12 space-y-2 font-secondary text-sm">
      <span className='text-accent-900/60'>Overview</span>
      <p className='max-w-[510px] leading-tight text-accent-900/70'>
        {
          props.overView
        }
      </p>
    </div>
  )
}

export default ProjectOverview