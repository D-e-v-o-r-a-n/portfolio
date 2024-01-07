import React, {FC} from 'react';
import { RouteComponentProps} from '@reach/router'
import { projectInterface } from '../Projects/array'
import './Project.scss'

interface ProjectProps extends RouteComponentProps {
    project: projectInterface;
}

const ProjectComponent:FC<ProjectProps> = ( props ) => {

    return(
        <div className='project-container'>
            <div>
                <h2>{props.project.name}</h2>
                <p>{props.project.description}</p>
            </div>
            <img src={props.project.image} alt="Showcase image" />
        </div>
    )

}

export default ProjectComponent;
