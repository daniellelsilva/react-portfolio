import React, { Component } from 'react';
import trybetunes from '/home/danielle/Portfolio-react/portfolio-react/src/assets/trybetunes.mp4';

export default class Teste extends Component {
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
    const { popup } = this.state
    
    
    return (
      <div>
        <div className='proj-individual-videos'>
            <video src={trybetunes} width="600" height="300" controls="controls" />
            <p>TrybeTunes</p>
            <div className="div-video-icons">
              <button onClick={this.showPopup}>
                <i className="bi bi-info-square video-info-icon"></i>
              </button>
              
              <a href="https://github.com/daniellelsilva/trybetunes" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github video-github-icon"></i>
              </a>
              <a href="https://daniellelsilva.github.io/trybetunes/#/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-tv video-page-icon"></i>
              </a>
              
            </div>
          </div>
          
          {popup ? (
            <div>
              <h1>deu certo</h1>
              <button onClick={this.hidePopup}>fecha</button>
            </div>
          ) : null}
        
      </div>
    )
  }
}

