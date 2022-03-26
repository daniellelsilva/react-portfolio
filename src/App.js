import './App.scss';
import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Projects from './pages/Projects';
import PortProvider from './context/PortPorvider';

function App() {
  return (
    <PortProvider>
      <Route exact path="/" component={ Home } />
      <Route path="/about" component={ About } />
      <Route path="/projects" component={ Projects } />    
    </PortProvider>
  );
}

export default App;
