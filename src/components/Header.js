import React from "react";
import { Link } from "react-router-dom";
import './header.css';

class Header extends React.Component {
  render() {
    return (
    <header>
      <p className="portfolio-name">Nome do portfolio</p>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projetos</Link>
      </nav>
    </header>
    )
  }
}

export default Header