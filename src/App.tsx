import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Link, RouteComponentProps, Router } from '@reach/router'
import HomeComponent from './Components/Home/Home';
import ProjectsComponent from './Components/Projects/Projects';
import AboutComponent from './Components/About/About';
import ContactComponent from './Components/Contact/Contact';

let Home = (props: RouteComponentProps) => <HomeComponent />

function App() {
  return (
    <>
      <header>
        <div>
          <nav>
            <ul>
              <li>
              <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/projects/'>Projects</Link>
              </li>
              <li>
                <Link to='/about/'>About</Link>
              </li>
              <li>
                <Link to='/contact/'>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className='content'>
          <Router>
            <Home path='/' />
            <ProjectsComponent path='/projects/'/>
            <AboutComponent path = '/about/'/>
            <ContactComponent path = '/contact/'/>
          </Router>
      </div>
    </>
  )
}

export default App;
