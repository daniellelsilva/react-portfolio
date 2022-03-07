import React from "react";
import { Link, NavLink } from "react-router-dom";
import './header.scss';

class Header extends React.Component {
  render() {
    return (
    <header className="header">
      <div className="header-btn">
        <Link exact to="/" className="header-portfolio-name">
          <button className="header-icon-btn header-link-btn">
            <div className="header-btn-txt">
              Danielle
            </div>
          </button>
        </Link>
      </div>

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