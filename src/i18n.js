import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    home: {
      role: "Front-end Developer"
    },
    about: {
      paragraph1: {
        part1: "Hello,",
        part2: "my name is"
      },
      paragraph2: {
        part1: "I'm a developer",
        part2: " and I work as a Front-end Developer at"
      },
      paragraph3: {
        part1: "I have solid experience in",
        part2: "and",
        part3: "I'm constantly improving my ability to create elegant and functional user interfaces, often using",
        part4: "to create wireframes and prototypes.",
        part5: " Additionally, I'm familiar with essential tools like NodeJS, Bootstrap, MUI, Jest, Cypress, SQL, and Docker."
      },
      paragraph4: {
        part1: "I'm always looking to expand my skill set and currently studying",
        part2: "as well as",
        part3: "to add new tools to my development arsenal."
      },
      paragraph5: {
        part1: "I'm open to collaboration opportunities, exciting challenges, and new connections in the technology industry."
      },
      paragraph6: {
        part1: "Feel free to reach out to me for a chat, and I hope you enjoy my portfolio!"
      }
    },
    projects: {},
    endText: {
      end: "and"
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