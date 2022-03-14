import React, { useState } from 'react';

export default function IndividualProject(project) {
  const {name, img, moduleCourse, linkGitHub, linkPage, linkVideo, text} = project.project;

  const [popupState, setPopupState] = useState(false)

  const showPopup = () => {
    setPopupState(true)
  }

  const hidePopup = () => {
    setPopupState(false)
  }

  return (

    <div className='project-individual-thumbnail'>
      <img className='project-img-individual' src={img} />
      <p>{name}</p>
        <div className="project-video-icons">
          
          <button onClick={showPopup} className="more-info-button">
            <i className="bi bi-question-circle video-info-icon"></i>
          </button>
          
          <a href={linkGitHub} target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github video-github-icon"></i>
          </a>
          
          <a href={linkPage} target="_blank" rel="noopener noreferrer">
            <i className="bi bi-eye video-page-icon"></i>
          </a>
        
        </div>
        {popupState ? (
          <section className='popup'>
            <div className='popup-text-video-container'>
              <div className='popup-div-close'>
                <button className='popup-Close' onClick={hidePopup}><i className="bi bi-x-circle popupClose"></i></button>
              </div>
              
              <video src={linkVideo} controls="controls" />

              <div className='popup-informative-text'>
                <p>{name}</p>
                <p>{ moduleCourse }</p>
                <p className='popup-info-project-text'>{text}</p>
              </div>
              
            </div>
          </section>
        ) : null}
    </div>

    
  )
}
