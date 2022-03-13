import React, { Component } from 'react';
import './projects.scss';

import ListProjects from './ListProjects';

export default class Projects extends Component {
  render() {
    return (
      <div className="project">
        <section className="project-section-introduction">
          <p>Projetos</p>
          <p>Os projetos estão organizados em ordem cronológica</p>
        </section>

        <section className='project-thumbnail-section'>
          <ListProjects />
        </section>
        
      </div>
    )
  }
}
