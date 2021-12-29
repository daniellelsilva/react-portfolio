import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class IndividualProject extends Component {
  render() {
    const { name, linkVideo, linkGitHub, linkPage } = this.props.project;
    return (
      <div className='proj-individual-videos'>
        <video src={linkVideo} controls="controls" />
        <p>{name}</p>
          <div className="div-video-icons">
            <i className="bi bi-info-square video-info-icon"></i>
            <a href={linkGitHub} target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github video-github-icon"></i>
            </a>
            <a href={linkPage} target="_blank" rel="noopener noreferrer">
              <i className="bi bi-tv video-page-icon"></i>
            </a>
          </div>
      </div>
    )
  }
}

IndividualProject.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    linkVideo:PropTypes.string.isRequired,
    linkGitHub:PropTypes.string.isRequired,
    linkPage:PropTypes.string.isRequired,
  })
  
}
