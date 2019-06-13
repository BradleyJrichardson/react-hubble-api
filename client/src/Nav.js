import { NavLink } from "react-router-dom";
import "./Nav.css";
import React from "react";
import { ThemeConsumer } from "./theme";

const activeStyle = {
  color: "rgb(187, 46, 31)"
};

export default function Nav() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <nav className="row space-between">
          <ul className="row nav">
            <li>
              <NavLink
                to="/"
                className="nav-link"
                exact
                activeStyle={activeStyle}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/hubble"
                className="nav-link"
                activeStyle={activeStyle}
              >
                Battle
              </NavLink>
            </li>
          </ul>
          <button
            style={{ fontSize: 30 }}
            className="btn-clear"
            onClick={toggleTheme}
          >
            {theme === "light" ? "🔦" : "💡"}
          </button>
        </nav>
      )}
    </ThemeConsumer>
  );
}
