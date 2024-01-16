import React, {FC,Ref,useEffect,useRef} from 'react';
import { RouteComponentProps, Link} from '@reach/router'
import ProjectsListItem from '../ProjectListItem/ProjectListItem';
import projectsArray, { projectInterface } from './array'
import './Projects.scss'

interface ProjectsProps extends RouteComponentProps {
  projectId?: string;
}

const ProjectsComponent:FC<ProjectsProps> = ( props ) => {  
    return(
      <div className='projects-list'>
        {projectsArray.map((project)=>{
            return (
              <Link to={`${[project.id]}`} onClick={()=>{console.log(project)}}>
                <ProjectsListItem project={project}/>
              </Link>
            )
            
        })}
      </div>
    )

}

export default ProjectsComponent;
