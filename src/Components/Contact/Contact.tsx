import React, {FC} from 'react';
import { RouteComponentProps} from '@reach/router'
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import './Contact.scss'

const ContactComponent:FC<RouteComponentProps> = () => {
  return (
    <>
        <div className='contact-container'>
          <a href="https://github.com/D-e-v-o-r-a-n">
            <FaGithub size={20}/>
          </a>
          <a href="https://www.linkedin.com/in/bartłomiej-rzyszkiewicz-2672aa2b0/">
            <FaLinkedin size={20}/>
          </a>
        </div>
        
    </>
  );
}

export default ContactComponent;
