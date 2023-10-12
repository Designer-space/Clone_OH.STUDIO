import React, { useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import ProjectsData from '../../../projectData';
import ContactSection from '../Sections/ContactSection';
import FooterSection from '../Sections/FooterSection';
import ProjectAire from './ProjectPages/ProjectAire';
import ProjectCorrelated from './ProjectPages/ProjectCorrelated'
import ProjectChannel_5 from './ProjectPages/ProjectChannel_5';
import ProjectRonald_Abram from './ProjectPages/ProjectRonald_Abram';
import ProjectPropeller from './ProjectPages/ProjectPropeller';

const ProjectPage = () => {
  const params = useParams()
  // console.log(params);
  useEffect(() =>{
    document.title = params.id;
  },[])

  const projectItem = ProjectsData.find((project) => {
    return project.title === params.id;
  })

  useEffect(() => {
    
  }, []);

  // console.log(projectItem);

  return (
    <>
      <NavLink to={"/"}>
        <div className="fixed w-full flex justify-center p-5 md:p-[30px] bg-gradient-to-b from-white font-primary">
          <div className="w-12 h-12 bg-accent-200 flex items-center justify-center rounded-full group hover:bg-accent-900 transition-all duration-300">
            <svg className='stroke-black group-hover:stroke-white' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </div>
        </div>
      </NavLink>
      <div className='pt-[90px] md:pt-[110px] font-primary text-sm'>

        {(() => {
            switch(params.id){
              case 'Aire':  
                return <ProjectAire projectItem={projectItem} />;
              
              case 'Correlated': 
                return <ProjectCorrelated projectItem={projectItem} />;

              case 'Channel 5': 
                return <ProjectChannel_5 projectItem={projectItem} />;

              case 'Ronald Abram': 
                return <ProjectRonald_Abram projectItem={projectItem} />;

              case 'Propeller': 
                return <ProjectPropeller projectItem={projectItem} />;

              case 'Schuh': 
                return <ProjectRonald_Abram projectItem={projectItem} />;

              case 'Paperstreet': 
                return <ProjectRonald_Abram projectItem={projectItem} />;
                
              case 'OH.SUPPLY': 
                return <ProjectRonald_Abram projectItem={projectItem} />;

              case 'Monokel Eyewear': 
                return <ProjectRonald_Abram projectItem={projectItem} />;

              case 'Lawtrades': 
                return <ProjectRonald_Abram projectItem={projectItem} />;

              case 'Baselworld': 
                return <ProjectRonald_Abram projectItem={projectItem} />;

              case 'NYCB': 
                return <ProjectRonald_Abram projectItem={projectItem} />;
            }
          })()}

        <div className="h-[50vh]">
          <ContactSection fontSize={ 'text-fluid-sub-header' } />
        </div>
        <FooterSection />
      </div>
    </>
  )
}

export default ProjectPage