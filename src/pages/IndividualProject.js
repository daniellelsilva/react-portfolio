import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import '../styles/pages/projects.scss'
import ReactTooltip from 'react-tooltip';

export default function IndividualProject(project) {
  const {name, img, moduleCourse, linkGitHub, linkPage, linkVideo, text, technologies } = project.project;

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

        <button data-tip='Saiba mais' onClick={showPopup} className="more-info-button project-btns">
          <Icon icon="bi:question-lg" className="project-video-icons-i" />
        </button>


        <a data-tip='GitHub' href={linkGitHub} target="_blank" rel="noopener noreferrer" className="project-btns">
          <Icon icon="uim:github-alt" className="project-video-icons-i" />
        </a>
          
        
        <a data-tip='Ver aplicação' href={linkPage} target="_blank" rel="noopener noreferrer" className="project-btns">
          <Icon icon="bi:eye" className="project-video-icons-i" /> 
        </a>
        <ReactTooltip place="right" className='custom-tooltip' delayHide={1000} effect='solid'/>    
        
          
        
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
                <p>{technologies}</p>
                <p className='popup-info-project-text'>{text}</p>
              </div>
              
            </div>
          </section>
        ) : null}
    </div>

    
  )
}
