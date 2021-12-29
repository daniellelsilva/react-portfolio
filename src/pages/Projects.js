import React, { Component } from 'react';
import './projects.css';
// import video from '../assets/screen-capture.webm';
import trybetunes from '../assets/trybetunes.mp4';
import tryunfo from '../assets/killertrunfo.mp4';
import solarSystem from '../assets/solar-system-video.mp4';
import shoppingCart from '../assets/shopping-cart-video.mp4';
import toDoList from '../assets/to-do-list-video.mp4';
import pixelArt from '../assets/pixel-art-video.mp4';
import trybewarts from '../assets/trybewarts-video.mp4';

export default class Projects extends Component {
  render() {
    return (
      <div className="project-div">
        <section className="proj-section-introduction">
          <p>Projetos</p>
          <p>Os projetos estão organizados em ordem cronológica</p>
        </section>

        <section className='projects-video-section'>
          <div className='proj-individual-videos'>
            <video src={trybetunes} width="600" height="300" controls="controls" />
            <p>TrybeTunes</p>
            <div className="div-video-icons">
              <i className="bi bi-info-square video-info-icon"></i>
              <a href="https://github.com/daniellelsilva/trybetunes" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github video-github-icon"></i>
              </a>
              <a href="https://daniellelsilva.github.io/trybetunes/#/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-tv video-page-icon"></i>
              </a>
              
            </div>
          </div>
            
          <div className='proj-individual-videos'>
            <video src={tryunfo} controls="controls" />
            <p>Tryunfo</p>
            <div className="div-video-icons">
              <i className="bi bi-info-square video-info-icon"></i>
              <a href="https://github.com/daniellelsilva/tryunfo" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github video-github-icon"></i>
              </a>
              <a href="https://daniellelsilva.github.io/tryunfo" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-tv video-page-icon"></i>
              </a>
            </div>
          </div>

          <div className='proj-individual-videos'>
            <video src={solarSystem} controls="controls" />
            <p>Solar system</p>
            <div className="div-video-icons">
              <i className="bi bi-info-square video-info-icon"></i>
              <a href="https://github.com/daniellelsilva/solar-system" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github video-github-icon"></i>
              </a>
              <a href="https://daniellelsilva.github.io/solar-system/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-tv video-page-icon"></i>
              </a>
            </div>
          </div>

          <div className='proj-individual-videos'>
            <video src={shoppingCart} controls="controls" />
            <p>Shopping cart</p>
            <div className="div-video-icons">
              <i className="bi bi-info-square video-info-icon"></i>
              <a href="https://github.com/daniellelsilva/shopping-cart" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github video-github-icon"></i>
              </a>
              <a href="https://daniellelsilva.github.io/shopping-cart/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-tv video-page-icon"></i>
              </a>
            </div>
          </div>

          <div className='proj-individual-videos'>
            <video src={toDoList} controls="controls" />
            <p>To do list</p>
            <div className="div-video-icons">
              <i className="bi bi-info-square video-info-icon"></i>
              <a href="https://github.com/daniellelsilva/to-do-list" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github video-github-icon"></i>
              </a>
              <a href="https://daniellelsilva.github.io/to-do-list/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-tv video-page-icon"></i>
              </a>
            </div>
          </div>

          <div className='proj-individual-videos'>
            <video src={pixelArt} controls="controls" />
            <p>Pixel-art</p>
            <div className="div-video-icons">
              <i className="bi bi-info-square video-info-icon"></i>
              <a href="https://github.com/daniellelsilva/pixel-art" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github video-github-icon"></i>
              </a>
              <a href="https://daniellelsilva.github.io/pixel-art/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-tv video-page-icon"></i>
              </a>
            </div>
          </div>

          <div className='proj-individual-videos'>
            <video src={trybewarts} controls="controls" />
            <p>Trybewarts</p>
            <div className="div-video-icons">
              <i className="bi bi-info-square video-info-icon"></i>
              <a href="https://github.com/daniellelsilva/trybewarts" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github video-github-icon"></i>
              </a>
              
              <a href="https://daniellelsilva.github.io/trybewarts/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-tv video-page-icon"></i>
              </a>
            </div>
          </div>

        </section>
        
      </div>
    )
  }
}
