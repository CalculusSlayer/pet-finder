import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();
  return (
    
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            The Pet Finder's HeadQuarters
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  {location.pathname === "/" && <span className="sr-only">(Current)</span>}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                  {location.pathname === "/about" && <span className="sr-only">(Current)</span>}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                  {location.pathname === "/contact" && <span className="sr-only">(Current)</span>}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/blog">
                  Blog
                  {location.pathname === "/blog" && <span className="sr-only">(Current)</span>}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
