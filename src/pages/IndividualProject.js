import React, { useState } from 'react';
import { Icon } from '@iconify/react';

export default function IndividualProject(project) {
  const {name, img, moduleCourse, linkGitHub, linkPage, linkVideo, text} = project.project;

  const [popupState, setPopupState] = useState(false)

  const showPopup = () => {
    setPopupState(true);
    console.log('open')
  }

  const showPopup2 = () => {
    setPopupState(true);
    console.log('open2')
  }

  const hidePopup = () => {
    setPopupState(false);
    console.log('close')
  }

  return (
    <button type="button" onClick={showPopup2} className='project-individual-thumbnail'>
      <img className='project-img-individual' src={img} />
      <p>{name}</p>
        <div className="project-video-icons">
          
          <button onClick={showPopup} className="more-info-button project-btns">
            <Icon icon="bi:question-lg" className="project-video-icons-i" />
          </button>
          
          <a href={linkGitHub} target="_blank" rel="noopener noreferrer" className="project-btns">
            <Icon icon="uim:github-alt" className="project-video-icons-i" />
          </a>
          
          <a href={linkPage} target="_blank" rel="noopener noreferrer" className="project-btns">
            <Icon icon="bi:eye" className="project-video-icons-i" /> 
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
    </button>

    
  )
}
