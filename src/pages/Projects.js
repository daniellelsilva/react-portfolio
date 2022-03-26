import React, { Component } from 'react';
import Header from '../components/Header';
import './projects.scss';

import ListProjects from './ListProjects';

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
