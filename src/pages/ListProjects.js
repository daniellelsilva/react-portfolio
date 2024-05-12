import React, { Component } from 'react';
import ReactGA from 'react-ga';
import allProjectsPtBr from '../data/allProjects';
import IndividualProject from './IndividualProject';

export default class ListProjects extends Component {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname);
  }
  render() {
    return (
      <>
      {allProjectsPtBr.map((project) => (<IndividualProject key={project.id} project={project} />))}
    </>
    )
  }
}
