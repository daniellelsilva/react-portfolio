import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { Icon } from '@iconify/react';
import Footer from '../components/Footer';
import './home.scss';

export default class Home extends Component {
  render() {
    return (
      <div className='all-home'>
        <header className="header-home">
          <nav className="header-home-nav">
            <NavLink exact to="/" activeClassName="selected">Home</NavLink>
            <NavLink to="/about" activeClassName="selected">Sobre</NavLink>
            <NavLink to="/projects" activeClassName="selected">Projetos</NavLink>
          </nav>
        </header>
          <div className="home">
          
            <section className="home-section home-text-animation">
              <p className="home-name-1">Danielle</p>
              <p className="home-name-2">Silva</p>
              <div className="home-subtitle">
                <p className="home-subtitle-1">Desenvolvedora front-end</p><span>|</span>
                <p className="home-subtitle-2">Estudante de Desenvolvimento Web Full Stack</p><span>|</span>
                <p className="home-subtitle-3">Trybe</p>
              </div>
            </section>
            <section className="home-links">
                <a href="https://www.linkedin.com/in/danielle-lsilva/" target="_blank" rel="noopener noreferrer"><Icon icon="akar-icons:linkedin-fill" /></a>
                <a href="https://github.com/daniellelsilva" target="_blank" rel="noopener noreferrer"><Icon icon="bi:github" /></a>
                <a href="https://www.instagram.com/ls_danielle/" target="_blank" rel="noopener noreferrer"><Icon icon="bi:instagram" /></a>
              </section>
          </div>

          <Footer />
      </div>
      
    )
  }
}
