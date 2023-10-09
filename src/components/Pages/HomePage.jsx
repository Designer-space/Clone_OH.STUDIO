import React from 'react'
import HeroSection from '../Sections/HeroSection'
import ProjectSection from '../Sections/ProjectSection'
import ContactSection from '../Sections/ContactSection'
import ShopBtn from '../ShopBtn'
import FooterSection from '../Sections/FooterSection'
import { useEffect } from 'react'
import Navbar from './Navbar'

const HomePage = () => {
  useEffect(() => {
    document.title = "OH.STUDIO";
  },[]);
  
  return (
    <>
      <Navbar />
      <main className=''>
        <HeroSection />
        <ProjectSection />
        <ShopBtn />
        <div className="h-[50vh]">
          <ContactSection fontSize="text-fluid-sub-header" />
        </div>
        <FooterSection />
      </main>
    </>
  )
}

export default HomePage