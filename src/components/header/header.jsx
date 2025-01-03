import React from "react";
import logoImg from "../../assets/images/logo.png";
import "./styles-header.css";

class Header extends React.Component {
  render() {
    return (
      <header className="container-header">
        <nav className="container-navegacao">
          <section className="logo-navegacao">
            <img className="logo" src={logoImg} alt="" />
            <p>Space Flight News</p>
          </section>

          <ul className="menu-navegacao">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Trending</a>
            </li>
            <li>
              <a href="/">Categories</a>
            </li>
            <li>
              <a href="/">About us</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
