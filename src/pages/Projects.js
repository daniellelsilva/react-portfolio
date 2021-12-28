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
        <section>
          <p>Projetos</p>
          <p>Meus projetos estão organizados em ordem cronológica</p>
        </section>

        <section>
          <div>
            <video src={trybetunes} width="600" height="300" controls="controls" />
            <p>TrybeTunes</p>
          </div>
            
          <div>
            <video src={tryunfo} width="600" height="300" controls="controls" />
            <p>Tryunfo</p>
          </div>

          <div>
            <video src={solarSystem} width="600" height="300" controls="controls" />
            <p>Solar system</p>
          </div>

          <div>
            <video src={shoppingCart} width="600" height="300" controls="controls" />
            <p>Shopping cart</p>
          </div>

          <div>
            <video src={toDoList} width="600" height="300" controls="controls" />
            <p>To do list</p>
          </div>

          <div>
            <video src={pixelArt} width="600" height="300" controls="controls" />
            <p>Pixel-art</p>
          </div>

          <div>
            <video src={trybewarts} width="600" height="300" controls="controls" />
            <p>Trybewarts</p>
          </div>

        </section>
        

        {/* <video src={video} width="600" height="300" controls="controls" autoPlay="true" /> */}
        
        <a href='https://daniellelsilva.github.io/to-do-list/' target="_blank" rel="noopener noreferrer">aqui</a>
      </div>
    )
  }
}
