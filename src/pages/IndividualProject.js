import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class IndividualProject extends Component {
  constructor() {
    super();

    this.state = {
      popup: false,
    }

    this.showPopup = this.showPopup.bind(this);
    this.hidePopup = this.hidePopup.bind(this);
  }

  showPopup() {
    this.setState({ popup: true })
  }

  hidePopup() {
    this.setState({ popup: false })
  }

  render() {
    const { name, img, linkGitHub, linkPage, linkVideo, text } = this.props.project;
    const { popup } = this.state
    return (
      <div className='proj-individual-videos'>
        <img className='imagemm' src={img} />
        <p>{name}</p>
          <div className="div-video-icons">
            <button onClick={this.showPopup} className="more-info-button">
              <i className="bi bi-plus-circle video-info-icon"></i>
              {/* <i className="bi bi-info-square video-info-icon"></i> */}
            </button>
            <a href={linkGitHub} target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github video-github-icon"></i>
            </a>
            <a href={linkPage} target="_blank" rel="noopener noreferrer">
              <i className="bi bi-eye video-page-icon"></i>
            </a>
          </div>
          {popup ? (
            <section className='container-more-info'>
              <div className='text-video-container'>
                <div className='div-close-popup'>
                  <button className='popupClose' onClick={this.hidePopup}><i className="bi bi-x-circle popupClose"></i></button>
                </div>
                
                <video src={linkVideo} controls="controls" />

                <div className='project-informative-text'>
                  <p>{name}</p>
                  <p className='info-project-text'>{text}</p>
                </div>
                
              </div>
            </section>
          ) : null}
      </div>

      
    )
  }
}

IndividualProject.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    linkVideo:PropTypes.string.isRequired,
    linkGitHub:PropTypes.string.isRequired,
    linkPage:PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })
  
}
