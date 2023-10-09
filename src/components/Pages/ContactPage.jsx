import React,{ useEffect } from 'react'
import ContactSection from '../Sections/ContactSection'
import FooterSection from '../Sections/FooterSection'
import Navbar from './Navbar';


const Contact = () => {
  useEffect(() => {
    document.title = "Contact | OH.STUDIO";
  },[]);
  return (
    <>
      <Navbar />
      <div className='h-[calc(100vh-14rem)] sm:h-[calc(100vh-12rem)] font-primary'>
        <ContactSection fontSize="text-fluid-header" />
        <FooterSection />
      </div>
    </>
  )
}

export default Contact