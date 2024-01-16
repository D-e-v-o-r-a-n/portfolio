import React, {FC} from 'react';
import { Link, RouteComponentProps} from '@reach/router'
import { projectInterface } from '../Projects/array'
import './ProjectPage.scss'
import projectsArray from '../Projects/array';

const ProjectPage:FC<RouteComponentProps> = ( props ) => {
    const id: number = Number.parseInt(props.uri?.slice(-1)!)
    const project:projectInterface = projectsArray[id]
    return(
    <> 
        <div className='project-page-containter'>
            <h1>{project.name}</h1>
            <div>
                {project.description}
               <img src={project.images[0]} alt="" /> 
               <img src={project.images[1]} alt="" /> 
            </div>
        </div>
    </>
    )

}

export default ProjectPage;
