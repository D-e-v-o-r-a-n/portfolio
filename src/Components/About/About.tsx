import React, {FC} from 'react';
import { RouteComponentProps} from '@reach/router'
import './About.scss'
import ContactComponent from '../Contact/Contact';


const AboutComponent:FC<RouteComponentProps> = (props) => {
  return (
    <>
        <div className='about-container'>
          <div className="about-content">
              <section id='about'>
                I'am a student majoring in computer science and Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Beatae, soluta atque sint quos pariatur dolorem mollitia, harum perferendis ipsa quasi illum accusamus delectus!
                Illo vel nostrum iste voluptatibus eum odio. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti est nemo amet, beatae veniam dolorum dolores.
                Nam amet, itaque laboriosam libero, id iusto, repellendus reprehenderit voluptatibus sint alias cum deserunt?
              </section>
              <section id='skills'>
                I'am a student majoring in computer science and Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Beatae, soluta atque sint quos pariatur dolorem mollitia, harum perferendis ipsa quasi illum accusamus delectus!
                Illo vel nostrum iste voluptatibus eum odio. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti est nemo amet, beatae veniam dolorum dolores.
                Nam amet, itaque laboriosam libero, id iusto, repellendus reprehenderit voluptatibus sint alias cum deserunt?
              </section>
              <section id="technologies">
                <span>Technologies</span>
                <ul>
                  <li>HTML + CSS</li>
                  <span>I have intrest in web developement so of course these are needed and I feel comfortable with them</span>

                  <li>JavaScript</li>
                  <span>After static websites with HTML + CSS came time for some dynamic action and there I decided to learn JS</span>

                  <li>SCSS</li>
                  <span>I wanted to try out some CSS preprocessors that I heard about, so I went with SCSS to help me with write styling better</span>

                  <li>React</li>
                  <span>My JavaScript framework of choice became React, mostly because I wanted to learn any framework and React is quite popular. I also liked some things that it offers, like React Hooks</span>

                  <li>TypeScript</li>
                  <span>Following to learing React I felt comfortable with JavaScript so i decided to try out its superset - TypeScript. Im for sure still  not as comfortable with it as I am with JS, but im still learning about its features</span>

                  <li>Firebase</li>
                  <span>For now I am using Firebase mostly as hosting option for my web apps, but Im open to learning more about it</span>

                  <li>Git</li>
                  <span>I use git - more specificly github for version control of my projects</span>
                </ul>
              </section>
              <section id="soft-skills">
                <span>Soft Skills</span>
                <ul>
                  <li>None</li>
                  <span>Yeah. Tbh i dont talk to people you know.</span>

                  <li>Inquisitiveness</li>
                  <span>I try to undernstand exactly how things work and why</span>

                  <li>Meeting deadlines</li>
                  <span>I like things on time yk</span>

                  <li>Passionate about learning</li>
                  <span>Im always looking to expand my knowledge and skillset.</span>

                  <li>Critical thinking</li>
                  <span></span>

                </ul>
              </section>
          </div>
          <div className="about-sidebar">
            <ul className="sidebar-list">
              <a href="#about">
                <li>About</li>
              </a>
              <a href="#skills">
                <li>Skills</li>
              </a>
              <ul>
                <a href="#technologies">
                  <li>Technologies</li>
                </a>
                <a href="#soft-skills">
                  <li>Soft Skills</li>
                </a>
              </ul>
            </ul>

            <ContactComponent />
          </div>
        </div>
        
    </>
  );
}

export default AboutComponent;
