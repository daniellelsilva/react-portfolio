import React, { Component } from 'react';
import imagem from '../undraw_stars_re_6je7.svg';
import './home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="home-div">
        <section className="text-section">
          <p>Olá,</p>
          <p>bem vindo(a) ao meu portfólio</p>
        </section>
        <section className="img-section">
          <img src={imagem} alt="bla"/>
        </section>
      </div>
    )
  }
}
