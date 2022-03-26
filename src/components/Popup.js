import React, { useContext } from 'react';
import PortContext from '../context/PortContext';

export default function Popup(project) {
  const {name, moduleCourse, linkVideo, text} = project.project.project;
  console.log(project)
  const { setPopupState } = useContext(PortContext);

  const hidePopup = () => {
    setPopupState(false);
    console.log('close')
  }

  return (
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
  )
}

