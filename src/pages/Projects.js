import React, { Component } from 'react';
import Header from '../components/Header';
import ListProjects from './ListProjects';

import '../styles/pages/projects.scss';

export default class Projects extends Component {
  render() {
    return (
      <div className="dark-background">
        <Header />
        <div className="project">

        <section className='project-thumbnail-section'>
          <ListProjects />
        </section>
        
      </div>
      </div>
      
    )
  }
}
