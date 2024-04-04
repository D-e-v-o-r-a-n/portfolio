import React from 'react';
import logo from './logo.svg';
import './_App.scss';
import { Link, RouteComponentProps, Router } from '@reach/router'
import HomeComponent from './Components/Home/Home';
import ProjectsComponent from './Components/Projects/Projects';
import AboutComponent from './Components/About/About';
import FooterComponent from './Components/Footer/Footer';
import './queries.scss'

let Home = (props: RouteComponentProps) => <HomeComponent />

function App() {
  return (
    <>
      <header>
        <div>
          <nav>
            <ul>

              <Link to='/'>
                <li>
                    Home
                </li>
              </Link>

              <Link to='/projects/'>
                <li>
                  Projects
                </li>
              </Link>
              
              <Link to='/about/'>
                <li>
                  About
                </li>
              </Link>

            </ul>
          </nav>
        </div>
      </header>

      <div className='content'>
          <Router primary={false}>
            <Home path='/' />
            <ProjectsComponent path='/projects/'/>
            <AboutComponent path = '/about/'/>
          </Router>
      <FooterComponent/>
      </div>
    </>
  )
}

export default App;
