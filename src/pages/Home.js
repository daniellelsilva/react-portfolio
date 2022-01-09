import React, { Component } from 'react';
import imagem from '../assets/undraw_add_color_re_buro.svg';
import './home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="home-div">
        <section className="text-section text-animation">
          {/* <p>Olá,</p> */}
          <p>Danielle Silva</p>
          <p>Estudante de Desenvolvimento Web | Trybe </p>
          <section className="home-links">
            <a href="https://www.linkedin.com/in/danielle-lsilva/" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
            <a href="https://github.com/daniellelsilva" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          </section>
        </section>
        <section className="img-section text-animation">
          <img src={imagem} alt="bla"/>
        </section>
      </div>
    )
  }
}
