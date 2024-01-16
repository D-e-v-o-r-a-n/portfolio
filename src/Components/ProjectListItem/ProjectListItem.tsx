import React, {FC} from 'react';
import { Link, RouteComponentProps} from '@reach/router'
import { projectInterface } from '../Projects/array'
import './_ProjectListItem.scss'
import Carousel from '../Carousel/Carousel';


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
        <Carousel slides={props.project.images}/>   
    </div>

    )

}

export default ProjectsListItem;
