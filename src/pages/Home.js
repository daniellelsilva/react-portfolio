import React, { Component } from 'react';
import ReactGA from 'react-ga';

import Header from '../components/Header';
import Footer from '../components/Footer';
import SocialMedia from '../components/SocialMedia';

import '../styles/pages/home.scss';

export default class Home extends Component {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname);
  }
  render() {
    return (
      <div className='all-home'>
        <Header />
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
            <SocialMedia />
          </div>

          <Footer />
      </div>
      
    )
  }
}
