import React from "react";
import { Link, NavLink } from "react-router-dom";
import './header.css';

class Header extends React.Component {
  render() {
    return (
    <header>
      <div className="botao-teste">
        <Link exact to="/" className="portfolio-name">
          <button className="icon-btn add-btn">
            <div className="btn-txt">Danielle</div>
          </button>
        </Link>
      </div>

      <nav>
        <NavLink exact to="/" activeClassName="selected">Home</NavLink>
        <NavLink to="/about" activeClassName="selected">Sobre</NavLink>
        <NavLink to="/projects" activeClassName="selected">Projetos</NavLink>
      </nav>
    </header>
    )
  }
}

export default Header