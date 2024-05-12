import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { Icon } from '@iconify/react';
import hardSkillsIcons from '../data/hardSkillsIcons';
import image from '../assets/portfolio-img.jpg';

import Header from '../components/Header';
import SocialMedia from '../components/SocialMedia';

import '../styles/pages/about.scss';


export default class About extends Component {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname);
  }
  render() {
    return (
      <div className="all-about">
        <Header />
        <section className="about">
          <div className="about-header-text-skills" >
            
            <div className="about-text-skills">
              <section className="about-text">
                <p className="about-text-p about-text-p-1">Olá, </p>
                
                <p className="about-text-p about-text-p-2">meu nome é <span>Danielle Silva</span></p>
                
                <p className="about-text-p about-text-p-3">Sou desenvolvedora <span>full-stack</span> e atuo como Desenvolvedora Front-end na <span>Inteligov</span> !</p>
                
                <p className="about-text-p about-text-p-3">Possuo experiência sólida em <span>JavaScript</span>, <span>ReactJS</span>, <span>TypeScript</span>, <span>React Native</span> e <span>Sass/CSS</span>, estou constantemente aprimorando minha habilidade em criar interfaces de usuário elegantes e funcionais, muitas vezes utilizando o <span>Figma</span> para criar wireframes e protótipos. Além disso, estou familiarizada com ferramentas essenciais como NodeJS, Bootstrap, MUI, Jest, Cypress, SQL e Docker para desenvolvimento de aplicativos robustos</p>
                
                <p className="about-text-p about-text-p-5">Estou sempre buscando expandir meu conjunto de habilidades e atualmente estou estudando <span>NextJS</span>, bem como <span>Ruby</span> e <span>Ruby on Rails</span> para adicionar novas ferramentas ao meu arsenal de desenvolvimento.</p>
                
                <p className="about-text-p about-text-p-5">Estou aberta a oportunidades de colaboração, desafios emocionantes e novas conexões na indústria de tecnologia.</p>

                <p className="about-text-p about-text-p-6"><span>Sinta-se à vontade para me chamar para conversar e espero que goste do meu portfólio!</span></p>
              </section>
              <div className="about-image">
            <img className="about-img" src={image} alt="profile" /> 
          </div>
              <section className="about-skills">
                <p className="about-skills-p">SKILLS</p>
                <div className="about-skill">
                {hardSkillsIcons.map((icon, index) => (
                    <div key={index} className="about-div-icon">
                      <Icon icon={icon.icon} className={icon.className} />
                    <p className='about-icon-text'>{icon.title}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
            
          </div>
          
          <SocialMedia />
        </section>
        
      </div>
      
    )
  }
}
