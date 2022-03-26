import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/components/header.scss';

class Header extends React.Component {
  render() {
    return (
    <header className="header">
      <nav className="header-nav">
        <NavLink exact to="/" activeClassName="selected">Home</NavLink>
        <NavLink to="/about" activeClassName="selected">Sobre</NavLink>
        <NavLink to="/projects" activeClassName="selected">Projetos</NavLink>
      </nav>
    </header>
    )
  }
}

export default Header