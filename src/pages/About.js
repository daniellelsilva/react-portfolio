import React, { Component } from 'react';
import { Icon } from '@iconify/react';
import hardSkillsIcons from '../data/hardSkillsIcons';
import image from '../assets/portfolio-img.jpg';

import Header from '../components/Header';


import './about.scss';

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="about">
          <div className="about-header-text-skills" >
            <Header />
            <div className="about-text-skills">
              <section className="about-text">
                <p className="about-text-p about-text-p-1">Olá</p>
                <p className="about-text-p about-text-p-2">meu nome é <span>Danielle Silva</span></p>
                <p className="about-text-p about-text-p-3">Sou desenvolvedora <span>Front-end</span>, mas continuo como estudante da Trybe com o objetivo de me tornar uma desenvolvedora <span>Web Full Stack</span>.</p>
                <p className="about-text-p about-text-p-4">Um pouco sobre minha história: Sou bióloga por formação mas resolvi mudar minha vida e dar uma chance para a área da <span>tecnologia</span>, não contava que acabaria me apaixonando, sinto que realmente me encontrei.</p>
                <p className="about-text-p about-text-p-5"><span>Até o momento meu foco é Front-end, mas estou gostando de explorar os horizontes de Back-end também.</span></p>
                <p className="about-text-p about-text-p-6">Espero que goste do meu portfólio!</p>
              </section>
              <section className="about-skills">
                <p className="about-skills-p">HARD SKILLS</p>
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
          <div className="about-image">
            <img className="about-img" src={image} alt="profile" /> 
          </div>
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
