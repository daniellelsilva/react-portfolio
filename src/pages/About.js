import React, { Component } from 'react';
import { Icon } from '@iconify/react';
import image from '../assets/portfolio-img.jpg'
import './about.scss';

import empathy from '../assets/undraw_with_love_re_1q3m.svg';
import group from '../assets/undraw_conversation_re_c26v.svg';
import talk from '../assets/undraw_community_re_cyrm.svg';


export default class About extends Component {
  render() {
    return (
      <main className="about">
        
        <section className="about-intro">
          <div className="about-text-section">
            <p>Olá, meu nome é <span>Danielle Silva</span>, sou uma bióloga migrando para a área da tecnologia.</p>
            <p>Estou estudando na <span>Trybe</span>, amo Front-end mas também estou muito animada para estudar Back-end, com o objetivo de me tornar uma desenvovledora <span>full-stack</span>.</p>
            {/* <p>Tenho experiência em <span>HTML</span>, <span>CSS3</span>, <span>JavaScript</span> e <span>ReactJS</span>.</p>  */}
            <p>Espero que goste do meu portfólio!</p>
          </div>
          <img className="about-img" src={image} alt="profile" /> 
        </section>
        <div className="arrow">
          <a href='#about' className="arrow-link arrow-point"></a>
          
        </div>

        <section className="about-skills" id='about'>
          <div className="div-skills-title">
            <p className="about-skills-title">Habilidade atuais</p>
          </div>
        
          <div className="about-both-skills-section about-div-hard-skills-icon-text">
            <div className="about-skills-subtitle">
              <p className="about-title">Hard skills</p>
            </div>
            
            <div className="about-hard-skills">
              <div className="about-div-icon-text">
                <i className="fab fa-css3-alt about-hard-skills-icons"></i>
                <p>CSS</p>
              </div>

              <div className="about-div-icon-text">
                <i className="fab fa-js about-hard-skills-icons"></i>
                <p>JavaScript</p>
              </div>

              <div className="about-div-icon-text">
                <Icon icon="akar-icons:sass-fill" className="about-hard-skills-icons" />
                <p>Sass</p>
              </div>

              <div className="about-div-icon-text">
                <i className="fab fa-html5 about-hard-skills-icons"></i>
                <p>HTML</p>
              </div>

              <div className="about-div-icon-text">
                <i className="fab fa-react about-hard-skills-icons"></i>
                <p>ReactJS</p>
              </div> 

              <div className="about-div-icon-text">
                <i className="fab fa-git-alt about-hard-skills-icons"></i>
                <p>Git</p>
              </div> 

              <div className="about-div-icon-text">
                <i className="fab fa-github about-hard-skills-icons"></i>
                <p>GitHub</p>
              </div>

              <div className="about-div-icon-text">
                <Icon icon="simple-icons:jest" className="about-hard-skills-icons" />
                <p>Jest</p>
              </div>    

              <div className="about-div-icon-text">
              <Icon icon="fontisto:mysql" className="about-hard-skills-icons" />
                <p>MySQL</p>
              </div>        
            </div>
          </div>
          
          <div className="about-both-skills-section about-soft-skills-section">
            <div className="about-skills-subtitle">
              <p className="about-title">Soft skills</p>
              <p className="about-sub-title">Em soft skills trabalhamos alguns pontos como:</p>
              <div className="about-soft-skills">
                <div className="about-div-icon-text div-soft-skills-img">
                  <img className="about-soft-skills-img" src={empathy} />
                  <p>Empatia</p>
                </div>

                <div className="about-div-icon-text div-soft-skills-img">
                  <img className="about-soft-skills-img" src={group} />
                  <p>Trabalho em grupo</p>
                </div>

                <div className="about-div-icon-text div-soft-skills-img">
                  <img className="about-soft-skills-img" src={talk} />
                  <p>Comunicação assertiva</p>
                </div>
                
                
                
              </div>
            </div>
            
          </div>
        </section>
        
      </main>
    )
  }
}
