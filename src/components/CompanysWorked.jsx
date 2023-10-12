import React from 'react'

const CompanysWorked = ({company, designation, employmentTime, employmentType}) => {
  return (
    <div className="font-secondary text-sm font-medium text-center space-y-4">
      <p className='text-accent-400'>{ employmentTime }</p>
      <p className='text-[22px] text-accent-900 py-1'>{ company }</p>
      <p className='text-accent-400 pb-1'>{ designation }</p>
      <p className='bg-accent-200/50 rounded-full px-3 py-1 w-min mx-auto'>{ employmentType }</p>
    </div>
  )
}

export default CompanysWorked