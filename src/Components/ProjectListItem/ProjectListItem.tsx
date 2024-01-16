import React, {FC} from 'react';
import { Link, RouteComponentProps} from '@reach/router'
import { projectInterface } from '../Projects/array'
import './_ProjectListItem.scss'



interface ProjectProps extends RouteComponentProps {
    project: projectInterface;
}

const ProjectsListItem:FC<ProjectProps> = ( props ) => {

    return(

    <div className='project-container'>
        <div className='text-container'>
            <h2>{props.project.name}</h2>
            <div>{props.project.description}</div>
        </div>
            <img src={props.project.images[0]} alt="Showcase image" />
    </div>

    )

}

export default ProjectsListItem;
