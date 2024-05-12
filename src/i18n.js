import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    home: {
      role: 'Front-end developer',
    },
    about:{
      paragraph1: {
        greeting: 'Hello',
        presentation: 'my name is',
      },
      paragraph2: {
        role: "I'm a ",
        role2: ' developer and work as Front-end developer at ',
      },
      paragraph3: {
        studies: "I'am currently improving my skills in ",
        studies2: 'and in',
        studies3: ', with the aim of specializing in ',
        studies4: ', and learning ',
        studies5: ' and ',
        studies6: ' which are widely used in my current company'
      },
      paragraph4: {
        role: "Until now, I identify more with front-end and intend to continue with that focus, but I think it's important to explore the horizons of back-end as well"
      }
    },
    projects: {

    }
  },
  ptbr: {
    home: {
      role: 'Desenvolvedora front-end',
    },
    about: {
      paragraph1: {
        part1: 'Olá',
        part2: 'meu nome é',
      },
      paragraph2: {
        part1: 'Sou desenvolvedora ',
        part2: ' e atuo como Desenvolvedora Front-end na',
      },
      paragraph3: {
        part1: "Possuo experiência sólida em ",
        part2: 'e',
        part3: "estou constantemente aprimorando minha habilidade em criar interfaces de usuário elegantes e funcionais, muitas vezes utilizando o ",
        part4: "para criar wireframes e protótipos.",
        part5: " Além disso, estou familiarizada com ferramentas essenciais como NodeJS, Bootstrap, MUI, Jest, Cypress, SQL e Docker",
      },
      paragraph4: {
        part1: 'Estou sempre buscando expandir meu conjunto de habilidades e atualmente estou estudando',
        part2: ", bem como ",
        part3: "para adicionar novas ferramentas ao meu arsenal de desenvolvimento."
      },
      paragraph5: {
        part1: "Estou aberta a oportunidades de colaboração, desafios emocionantes e novas conexões na indústria de tecnologia."
      },
      paragraph6: {
        part1: "Sinta-se à vontade para me chamar para conversar e espero que goste do meu portfólio!"
      }
    },
    projects: {

    },
    endText: {
      end: "e"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;