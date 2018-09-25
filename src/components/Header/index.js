import "./header.css";

import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header className="p-header">
    <div className="p-header__inner">
      <p className="p-header__logo">
        <NavLink exact to="/">
          DotYork
        </NavLink>
      </p>
      <span className="p-header__date">04/10/18</span>
    </div>
  </header>
);

export default Header;
