import React from 'react'
import SingleVideo from '../../ProjectsMixins/SingleVideo'
import ProjectHeader from '../../ProjectsMixins/ProjectHeader'
import SingleImage from '../../ProjectsMixins/SingleImage'
import ProjectDetails from '../../ProjectsMixins/ProjectDetails'
import ProjectOverview from '../../ProjectsMixins/ProjectOverview'
import DoubleImg from '../../ProjectsMixins/DoubleImg'

const ProjectNYCB = ({projectItem}) => {
  return (
    <>
      <ProjectHeader heading={projectItem.heading} title={projectItem.title} />
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 flex flex-col gap-8">
        <SingleImage projectItem={projectItem.img1} />
        
        <ProjectDetails client={projectItem.client} studio={projectItem.studio} role={projectItem.role} focus={projectItem.focus} />
        
        <SingleImage projectItem={projectItem.img2} />
        
        <ProjectOverview overView={projectItem.overView} />
        
        <DoubleImg projectItem1={projectItem.img3_1} projectItem2={projectItem.img3_2} />
        
        <SingleImage projectItem={projectItem.img4} />
        
        <DoubleImg projectItem1={projectItem.img5_1} projectItem2={projectItem.img5_2} />
        
        <SingleImage projectItem={projectItem.img6} />
        
        <DoubleImg projectItem1={projectItem.img7_1} projectItem2={projectItem.img7_2} />

        <SingleVideo projectItem={projectItem.video} />
      </div>
    </>
  )
}

export default ProjectNYCB