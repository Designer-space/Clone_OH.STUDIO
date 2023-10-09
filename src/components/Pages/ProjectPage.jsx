import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProjectsData from '../project';

const ProjectPage = () => {
  const params = useParams()
  console.log(params);
  useEffect(() =>{
    document.title = params.id;
  },[])

  const projectItem = ProjectsData.find((project) => {
    return project.title === params.id;
  })

  console.log(projectItem);

  return (
    <div>
      <h1 className='max-w-[900px] mx-auto text-fluid-header'>{projectItem.title}</h1>
    </div>
  )
}

export default ProjectPage