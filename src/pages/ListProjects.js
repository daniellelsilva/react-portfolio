import React, { Component } from 'react';
import allProjects from '../data/allProjects';
import IndividualProject from './IndividualProject';

export default class ListProjects extends Component {
  render() {
    return (
      <>
      {allProjects.map((project) => (<IndividualProject key={project.id} project={project} />))}
    </>
    )
  }
}
