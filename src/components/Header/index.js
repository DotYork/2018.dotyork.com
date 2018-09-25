import "./header.css";

import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header className="p-header">
    <NavLink exact to="/" className="p-header__logo">
      DotYork
    </NavLink>
    <span className="p-header__date">
      Thursday 4th October 2018.
      <br />
      Museum Gardens, York
    </span>
  </header>
);

export default Header;
