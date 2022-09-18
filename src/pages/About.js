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
                
                <p className="about-text-p about-text-p-3">Atualmente estou aprimorando minhas habilidades com <span>ReactJS</span>, com o objetivo de me especializar em <span>Fron-end</span>, e aprendendo <span>Ruby</span> e <span>Ruby on Rails</span> que são muito utilizados na minha atual empresa</p>
                
                <p className="about-text-p about-text-p-5"><span>Até o momento me identifico mais com front-end e pretendo continuar com esse foco, mas acho importante explorar os horizontes de back-end também.</span></p>

                <p className="about-text-p about-text-p-4"><span>Fun fact</span>: Sou bióloga por formação e por muito tempo não imaginava um futuro trabalhando na área da tecnologia! Essa impressão não durou nem o primeiro mês de curso na <span>Trybe</span>, foi só dar uma chance para acabar apaixonada pela área, sinto que encontrei meu caminho!</p>
                
                <p className="about-text-p about-text-p-6">Espero que goste do meu portfólio!</p>
              </section>
              <div className="about-image">
            <img className="about-img" src={image} alt="profile" /> 
          </div>
              <section className="about-skills">
                <p className="about-skills-p">SKILLS</p>
                <div className="about-skill">
                {hardSkillsIcons.map((icon) => (
                    <div key={icon.id} className="about-div-icon">
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
