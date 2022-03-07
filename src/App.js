import './App.scss';
import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from '../src/components/Footer';
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Projects from './pages/Projects';

function App() {
  return (
    <>
      <Header />
      <Route exact path="/" component={ Home } />
      <Route path="/about" component={ About } />
      <Route path="/projects" component={ Projects } />
      <Footer />      
    </>
  );
}

export default App;
