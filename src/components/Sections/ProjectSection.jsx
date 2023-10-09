import React from 'react'
import Card from '../card'

import ProjectsData from '../project';

const ProjectSection = () => {
  return (
    <section className='max-w-[1400px] p-5 md:p-10 mx-auto grid md:grid-cols-2 md:gap-x-5 md:gap-y-10 '>
      {
        ProjectsData.map((card, index) => {
          return (<Card key={index} img={ card.images } title={ card.title } type={ card.fileType } />)
        })
      }
    </section>
  )
}

export default ProjectSection