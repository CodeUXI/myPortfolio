import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
// import About from "../dashboard/About";

class Navbar extends Component {
  render() {
    return (
      <div className="header">
        <nav className="nav-wrapper">
          <div className="container">
            <ul className="nav--lists">
              <Link to="/" className="logo left">
                Ayomide Bajo
              </Link>

              <li>
                <NavLink to="/about" className="text">
                  About me
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/portfolio"
                  className="text"
                  activeClassName="active"
                >
                  Portfolio
                </NavLink>
              </li>

              <li>
                <NavLink to="/contact" className="text">
                  Contact
                </NavLink>
              </li>

              <li>
                <NavLink to="/blog" className="text">
                  Blog
                </NavLink>
              </li>

              <li>
                <p>hello@ayobajo.com</p>
              </li>
            </ul>
          </div>
        </nav>
        {/* <About /> */}
      </div>
    );
  }
}

export default Navbar;
