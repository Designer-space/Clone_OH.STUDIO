import React from 'react'

const HeroSection = () => {
  return (
    <>
      <section className='w-full h-[50vh] md:h-[70vh] flex flex-col gap-10 items-center justify-center p-4 font-primary'>
        <h1 className='text-fluid-header font-[500] text-center leading-tight max-w-[800px] '>A brand and product designer working with clients globally</h1>
        <div className="hidden text-sm sm:flex items-center gap-4  ">
          <p>Expertise</p>
          <p className='bg-accent-200/50 rounded-full px-3 py-1'>Branding</p>
          <p className='bg-accent-200/50 rounded-full px-3 py-1'>Product</p>
          <p className='bg-accent-200/50 rounded-full px-3 py-1'>Design Systems</p>
        </div>
    </section>
    </>
  )
}

export default HeroSection