import './App.scss';
import React from 'react';
import ReactGA from 'react-ga4';
import { Route } from 'react-router-dom';

import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Projects from './pages/Projects';
ReactGA.initialize('G-6EYDPQH5CN');
ReactGA.send("pageview");

function App() {
  return (
    <>
      <Route exact path="/" component={ Home } />
      <Route path="/about" component={ About } />
      <Route path="/projects" component={ Projects } />    
    </>
  );
}

export default App;
