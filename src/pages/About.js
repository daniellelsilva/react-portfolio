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
                
                <p className="about-text-p about-text-p-3">Sou desenvolvedora <span>full-stack</span> e atuo como Desenvolvedora Front-end na <span>Searasa Experian</span> !</p>
                
                <p className="about-text-p about-text-p-3">Possuo experiência sólida em <span>JavaScript</span>, <span>NextJS</span>, <span>ReactJS</span>, <span>TypeScript</span>, <span>React Native</span> e <span>Sass/CSS</span>, estou constantemente aprimorando minha habilidade em criar interfaces de usuário elegantes e funcionais, muitas vezes utilizando o <span>Figma</span> para criar wireframes e protótipos. Além disso, estou familiarizada com ferramentas essenciais como NodeJS, Bootstrap, MUI, Jest, Cypress, SQL e Docker para desenvolvimento de aplicativos robustos</p>
                
                <p className="about-text-p about-text-p-5">Estou sempre buscando expandir meu conjunto de habilidades e atualmente estou estudando <span>AI</span>, <span>Machine Learning</span> e <span>Deep Learning</span> para adicionar novas ferramentas ao meu arsenal de desenvolvimento.</p>
                
                <p className="about-text-p about-text-p-5">Estou aberta a oportunidades de colaboração, desafios emocionantes e novas conexões na indústria de tecnologia.</p>

                <p className="about-text-p about-text-p-6"><span>Sinta-se à vontade para me chamar para conversar!</span></p>
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


// export default class About extends Component {
//   render() {
//     return (
//       <div className='dark-background'>
//         <Header />

//         <main className="about">
        
//           <section className="about-intro">
//             <div className="about-text-section">
//               <p>Olá</p>
//               <p>meu nome é <span>Danielle Silva</span></p>
//               <p>Sou desenvolvedora <span>Front-end</span>, mas continuo como estudante da Trybe com o objetivo de me tornar uma desenvolvedora <span>Web Full Stack</span>.</p>
//               <p>Um pouco sobre minha história, sou <span>bióloga</span> por formação mas resolvi mudar minha vida e dar uma chance para a área da <span>tecnologia</span>, não contava que acabaria me apaixonando, sinto que realmente me encontrei.</p>
//               <p>Até o momento meu foco é <span>Front-end</span>, mas estou gostando de explorar os horizontes de Back-end também.</p>
//               <p>Espero que goste do meu portfólio!</p>
//             </div>
//             <img className="about-img" src={image} alt="profile" /> 
//           </section>
//           <div className="arrow">
//             <a href='#about' className="arrow-link arrow-point"></a>
            
//           </div>

//           <section className="about-skills" id='about'>
//             <div className="div-skills-title">
//               <p className="about-skills-title">Habilidade atuais</p>
//             </div>
          
//             <div className="about-both-skills-section about-div-hard-skills-icon-text">
//               <div className="about-skills-subtitle">
//                 <p className="about-title">Hard skills</p>
//               </div>
              
//               <div className="about-hard-skills">

//                 {hardSkillsIcons.map((icon) => (
//                   <div key={icon.id} className="about-div-icon-text">
//                     <Icon icon={icon.icon} className={icon.className} />
//                   <p>{icon.title}</p>
//                   </div>
//                 ))}       
//               </div>
//             </div>
            
//           </section>
          
//         </main>
//       </div>
      
//     )
//   }
// }
