import React from "react";
import { Link, NavLink } from "react-router-dom";
import './header.css';

class Header extends React.Component {
  render() {
    return (
    <header>
      <Link exact to="/" className="portfolio-name">Nome do portfólio</Link>

      <nav>
        <NavLink exact to="/" activeClassName="selected">Home</NavLink>
        <NavLink to="/about" activeClassName="selected">About</NavLink>
        <NavLink to="/projects" activeClassName="selected">Projetos</NavLink>
      </nav>
    </header>
    )
  }
}

export default Header