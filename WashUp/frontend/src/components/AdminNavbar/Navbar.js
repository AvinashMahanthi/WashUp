import React, { useContext, useState } from "react";
import "../../App.css";
import { Link, useHistory } from "react-router-dom";
import "./AdminNavbarElements.css";
import { NavLink } from "react-router-dom";
// import { UserContext } from "../../App";

function AdminNavbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const history = useHistory();
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Wash Up
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/dashboard"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/addCarService"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Add Service
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={() => {
                  localStorage.clear();
                  history.push("/adminsignin");
                }}
              >
                Logout
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default AdminNavbar;
