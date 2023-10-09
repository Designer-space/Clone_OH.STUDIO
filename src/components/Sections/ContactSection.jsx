import React from 'react'

const ContactSection = ({fontSize}) => {
  return (
    <div className='h-full flex flex-col items-center justify-center font-medium leading-tight'>
      <h1 className={`${fontSize} tracking-tight text-center`}>Let's work together.</h1>
      <a href="mailto:" className={`${fontSize} text-accent-400 hover:text-accent-400/50 focus:text-accent-200 transition-colors duration-200`}>Get in touch</a>
    </div>
  )
}

export default ContactSection