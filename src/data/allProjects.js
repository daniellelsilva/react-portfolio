import primeiroPortfolio from '../assets/primeiro-portfolio.mp4';
import trybewarts from '../assets/trybewarts-video.mp4';
import pixelArt from '../assets/pixel-art-video.mp4';
import toDoList from '../assets/to-do-list-video.mp4';
import shoppingCart from '../assets/shopping-cart-video.mp4';
import solarSystem from '../assets/solar-system-video.mp4';
import tryunfo from '../assets/killertrunfo.mp4';
import trybetunes from '../assets/trybetunes.mp4';
import trybewallet from '../assets/TrybeWallet.mp4';
import appDeReceitas from '../assets/app-de-receitas.mp4';
import natours from '../assets/Natours.mp4';


import imgPrimeiroPortfolio from '../assets/img-primeiro-portfolio.png';
import imgTrybewarts from '../assets/img-trybewarts-img.png';
import imgPixelArt from '../assets/img-pixel-art.png';
import imgToDoList from '../assets/img-to-do-list.png';
import imgShoppingCart from '../assets/img-shopping-cart.png';
import imgSolarSystem from '../assets/img-solar-system.png';
import imgTryunfo from '../assets/img-tryunfo.png';
import imgTrybetunes from '../assets/img-trybetunes.png';
import imgTrybeWallet from '../assets/img-trybewallet.png';
import imgAppDeReceitas from '../assets/img-app-de-receitas.png';
import imgNatours from '../assets/img-natours.png';


const allProjects = [
  {
    id: 11,
    name: 'Natours',
    moduleCourse: 'Front-end',
    img: imgNatours,
    linkGitHub: 'https://github.com/daniellelsilva/natours',
    linkPage: 'https://daniellelsilva.github.io/natours/',
    linkVideo: natours,
    text: 'Este projeto foi desenvolvido no curso de CSS avançado e Sass da Udemy ministrado por Jonas Schmedtmann. O objetivo do projeto e das aulas foi desenvolver a página de uma empresa de turismo fictícia chamada Natours, aplicando conceitos avançados de CSS e Sass'
  },
  
  {
    id: 10,
    name: 'Cook It',
    moduleCourse: 'Front-end',
    img: imgAppDeReceitas,
    linkGitHub: 'https://github.com/daniellelsilva/cook-it',
    linkPage: 'https://daniellelsilva.github.io/cook-it/#/',
    linkVideo: appDeReceitas,
    text: 'Este foi o último projeto de Front-end, o objetivo foi criar um app de receitas de dirnks e comidas, utilizando ferramentas como react, hooks e context. O projeto foi realizado em grupo, os integrantes estão citados no GitHub'
  },
  
  {
    id: 9,
    name: 'TrybeWallet',
    moduleCourse: 'Front-end',
    img: imgTrybeWallet,
    linkGitHub: 'https://github.com/daniellelsilva/TrybeWallet',
    linkPage: 'https://daniellelsilva.github.io/TrybeWallet/#/',
    linkVideo: trybewallet,
    text: 'A proposta do projeto foi criar o TrybeWallet, uma carteira de controle de gastos com conversor de moedas, possibilitando adicionar e remover gastos, visualizar a tabela com gastos e total gasto em Reais.'
  },
  
  {
    id: 8,
    name: 'TrybeTunes',
    moduleCourse: 'Front-end',
    img: imgTrybetunes,
    linkGitHub: 'https://github.com/daniellelsilva/trybetunes',
    linkPage: 'https://daniellelsilva.github.io/trybetunes/#/',
    linkVideo: trybetunes,
    text: 'A proposta do projeto foi criar o TrybeTunes, uma aplicação capaz de reproduzir músicas das mais variadas bandas e artistas, criar uma lista de músicas favoritas e editar o perfil da pessoa usuária logada.'
  },

  {
    id: 7,
    name: 'Tryunfo',
    moduleCourse: 'Front-end',
    img: imgTryunfo,
    linkVideo: tryunfo,
    linkGitHub: 'https://github.com/daniellelsilva/tryunfo',
    linkPage: 'https://daniellelsilva.github.io/tryunfo',
    text: 'Neste projeto foi desenvolvido um jogo de Super Trunfo. A aplicação possuia tema livre e deveria ser desenvolvido um baralho, sendo possível criar cartas, pré-visualizar a carta, adicionar e remover cartas do baralho, além de possuir três filtros.'
  },

  {
    id: 6,
    name: 'Solar system',
    moduleCourse: 'Front-end',
    img: imgSolarSystem,
    linkVideo: solarSystem,
    linkGitHub: 'https://github.com/daniellelsilva/solar-system',
    linkPage: 'https://daniellelsilva.github.io/solar-system/',
    text: 'Este foi o primeiro projeto do módulo de Front-end e meu primeiro projeto em React, foi desenvolvido um modelo do sistema solar, sendo visualizado todos os planetas e missões espaciais.'
  },

  {
    id: 5,
    name: 'Shopping cart',
    moduleCourse: 'Fundamentos',
    img: imgShoppingCart,
    linkVideo: shoppingCart,
    linkGitHub: 'https://github.com/daniellelsilva/shopping-cart',
    linkPage: 'https://daniellelsilva.github.io/shopping-cart/',
    text: 'Primeiro projeto utilizando API! O objetivo do projeto foi desenvolver um carrinho de compras totalmente dinâmico, consumindo dados diretamente de uma API.'
  },

  {
    id: 4,
    name: 'To do list',
    moduleCourse: 'Fundamentos',
    img: imgToDoList,
    linkVideo: toDoList,
    linkGitHub: 'https://github.com/daniellelsilva/to-do-list',
    linkPage: 'https://daniellelsilva.github.io/to-do-list/',
    text: 'Projeto do bloco de fundamentos, foi utilizado CSS e Javascript para criar uma aplicação onde é possível adicionar e remover tarefas, marcar tarefa como feita, remover somente itens marcados, salvar a lista e remover todos os itens.'
  },

  {
    id: 3,
    name: 'Pixel-art',
    moduleCourse: 'Fundamentos',
    img: imgPixelArt,
    linkVideo: pixelArt,
    linkGitHub: 'https://github.com/daniellelsilva/pixel-art',
    linkPage: 'https://daniellelsilva.github.io/pixel-art/',
    text: 'Projeto do bloco de fundamentos, foi utilizada manipulação de DOM e Javascript para criar uma aplicação onde é possível fazer arte com pixels. As cores deveriam ser aleatórias e o quadro deve permitir mudar o número de pixels.'
  },

  {
    id: 2,
    name: 'Trybewarts',
    moduleCourse: 'Fundamentos',
    img: imgTrybewarts,
    linkVideo: trybewarts,
    linkGitHub: 'https://github.com/daniellelsilva/trybewarts',
    linkPage: 'https://daniellelsilva.github.io/trybewarts/',
    text: 'Projeto do bloco de fundamentos, o desafio era criar um formulário HTML para a escola de magia Trybewarts utilizando CSS flexbox e Javascript. O projeto foi desenvolvido em dupla com Nayara Vasconcelos.'
  },

  {
    id: 1,
    name: 'Primeiro portfólio',
    moduleCourse: 'Fundamentos',
    img: imgPrimeiroPortfolio,
    linkVideo: primeiroPortfolio,
    linkGitHub: 'https://github.com/daniellelsilva/primeiro-portfolio',
    linkPage: 'https://daniellelsilva.github.io',
    text: 'Primeiro projeto e primeiro portfólio, esta foi minha primeira experiência com algo relacionado a programação'
  }
];


export default allProjects;