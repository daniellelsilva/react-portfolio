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
        greeting: 'Olá',
        presentation: 'meu nome é',
      },
      paragraph2: {
        role: 'Sou desenvolvedora ',
        role2: ' e atuo como Desenvolvedora Front-end na',
      },
      paragraph3: {
        studies: 'Atualmente estou aprimorando minhas habilidades em ',
        studies2: 'e em',
        studies3: ', com o objetivo de me especializar em ',
        studies4: ', e aprendendo ',
        studies5: 'e',
        studies6: ' que são muito utilizados na minha atual empresa'
      },
    },
    projects: {

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