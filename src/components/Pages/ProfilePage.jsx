import React,{ useEffect } from 'react'
import Profile_1 from "../../assets/images/profile_1.webp"
import Profile_2 from "../../assets/images/profile_2.webp"
import { placeWorkedData, companyWorkedWith } from '../experianceData'
import CompanysWorked from '../CompanysWorked'
import ContactSection from '../Sections/ContactSection'
import FooterSection from '../Sections/FooterSection'
import Navbar from './Navbar'

const ProfilePage = () => {
  useEffect(() => {
    document.title = "Profile | OH.STUDIO";
  },[]);
  return (
    <>
      <Navbar />
      <div className="font-secondary text-sm font-medium">
        <section className='w-full h-[50vh] md:h-[70vh] flex flex-col gap-10 items-center justify-center p-4'>
          <h1 className='text-fluid-header'>Hey 👋🏼 I'm Oli</h1>
        </section>
        <section className='max-w-[1440px] mx-auto p-5 md:p-10'>
          <div className="grid md:grid-cols-2 gap-5 ">
            <img src={Profile_1} alt="" className='rounded-md object-cover max-h-[300px] md:max-h-[600px] w-full' />
            <img src={Profile_2} alt="" className='hidden md:block rounded-md object-cover self-stretch' />
          </div>
        </section>
        <section className="flex flex-col justify-center my-10 md:my-36">
          <p className='bg-accent-200/50 rounded-full px-3 py-1 w-min mx-auto'>About</p>
          <p className='text-fluid-sub-header leading-tight tracking-tight text-center mx-auto p-5 md:max-w-[700px]'>A freelance designer based in the UK. I combine my experience in product and brand to solve problems, tell stories, and create compelling experiences.</p>
        </section>
        <section className="max-w-[1240px] mx-auto flex flex-col justify-center my-10 md:my-36">
          <p className='bg-accent-200/50 rounded-full px-3 py-1 w-min mx-auto'>Experience</p>
          <p className='text-fluid-sub-header leading-tight tracking-tight text-center mx-auto p-5 md:max-w-[700px]'>Where I've worked</p>
          <div className="grid gap-20 min-[500px]:grid-cols-2 md:grid-cols-3 my-28">
            {
              placeWorkedData.map((data, index) => {
                return (
                  <CompanysWorked key={index} employmentTime={data.employmentTime} company={data.company} designation={data.designation} employmentType={data.employmentType} />
                )
              })
            }
          </div>
        </section>
        <section className="max-w-[1240px] mx-auto flex flex-col justify-center mt-10 md:mt-36 mb-0">
          <p className='bg-accent-200/50 rounded-full px-3 py-1 w-min mx-auto'>Clients</p>
          <p className='text-fluid-sub-header leading-tight tracking-tight text-center mx-auto p-5 md:max-w-[700px]'>Who I've worked with</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:gap-custom-gap md:gap-y-10 lg:gap-y-16 my-20">
            {
              companyWorkedWith.map((data, index) => {
                return (
                  <div key={index} className={`${data.alt === 'Here' ? '' : 'invert'}`}>
                    <div className="select-none">
                      <div className="pointer-events-none">
                        <img src={data.img} alt={data.alt} loading='lazy' />
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </section>
      </div>
      <div className="h-[50vh]">
        <ContactSection fontSize="text-fluid-sub-header" />
      </div>
      <FooterSection />
    </>
  )
}

export default ProfilePage