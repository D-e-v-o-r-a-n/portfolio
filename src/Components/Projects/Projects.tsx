import React, {FC,useEffect} from 'react';
import { RouteComponentProps} from '@reach/router'
import ProjectComponent from '../Project/Project';
import projectsArray from './array'

const ProjectsComponent:FC<RouteComponentProps> = ( props ) => {
    return(
      <>
        {projectsArray.map((project)=>{
            return <ProjectComponent project={project}/>
        })}
      </>
    )

}

export default ProjectsComponent;
