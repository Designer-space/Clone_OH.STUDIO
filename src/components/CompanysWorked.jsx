import React from 'react'

const CompanysWorked = ({company, designation, employmentTime, employmentType}) => {
  return (
    <div className="text-center space-y-2">
      <p className='text-accent-400 text-sm'>{ employmentTime }</p>
      <p className='text-xl font-medium'>{ company }</p>
      <p className='text-accent-400 text-sm pb-2'>{ designation }</p>
      <p className='text-sm bg-accent-200/50 rounded-full px-3 py-1 w-min mx-auto'>{ employmentType }</p>
    </div>
  )
}

export default CompanysWorked