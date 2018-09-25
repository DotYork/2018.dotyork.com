import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.css";

import Menu from "../../assets/icons/menu.js";
import Chat from "../../assets/icons/chat.js";
import Feedback from "../../assets/icons/star.js";
import Help from "../../assets/icons/help.js";

const Footer = () => (
  <footer className="p-footer">
    <div className="b-container">
      <ul className="p-footer__menu">
        <li>
          <NavLink to="/schedule">
            <span>
              <Menu fill="#ffffff" />
            </span>
            Schedule
          </NavLink>
        </li>
        <li>
          <NavLink to="/questions">
            <span>
              <Chat fill="#ffffff" />
            </span>
            Questions
          </NavLink>
        </li>
        <li>
          <NavLink to="/feedback">
            <span>
              <Feedback fill="#ffffff" />
            </span>
            Feedback
          </NavLink>
        </li>
        <li>
          <NavLink to="/help">
            <span>
              <Help fill="#ffffff" />
            </span>
            Help
          </NavLink>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
