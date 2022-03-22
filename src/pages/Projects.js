import React, { Component } from 'react';
import Header from '../components/Header';
import './projects.scss';

import ListProjects from './ListProjects';

export default class Projects extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="project">
        <section className="project-section-introduction">
          <p>Projetos</p>
          <p>Os projetos estão organizados em ordem cronológica</p>
        </section>

        <section className='project-thumbnail-section'>
          <ListProjects />
        </section>
        
      </div>
      </div>
      
    )
  }
}
