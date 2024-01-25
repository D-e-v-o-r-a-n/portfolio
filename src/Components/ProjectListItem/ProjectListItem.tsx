import React, {FC} from 'react';
import { Link, RouteComponentProps} from '@reach/router'
import { projectInterface } from '../Projects/projectsArray'
import './_ProjectListItem.scss'
import Carousel from '../Carousel/Carousel';
import { FaGithub } from "react-icons/fa6";


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
        <div className="links-container">
            <a href={props.project.links[0]} className='link-button'>Check out</a>
            <a href={props.project.links[1]} className='github-link-button'> <FaGithub/></a>
        </div>
        <Carousel slides={props.project.images}/>

        <div className="tags">
            {props.project.tags.map(tag=>{
                return <span className='tag'>{tag}</span>
            })}
        </div>
    </div>

    )

}

export default ProjectsListItem;
