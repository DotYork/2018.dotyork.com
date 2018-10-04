import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.css";

const Footer = () => (
  <footer className="p-footer">
    <div className="b-container">
      <ul className="p-footer__menu">
        <li>
          <NavLink to="/schedule">
            <span className="p-icon--menu" />
            Schedule
          </NavLink>
        </li>
        <li>
          <NavLink to="/questions">
            <span className="p-icon--chat" />
            Questions
          </NavLink>
        </li>
        <li>
          <NavLink to="/feedback">
            <span className="p-icon--feedback" />
            Feedback
          </NavLink>
        </li>
        <li>
          <NavLink to="/help">
            <span className="p-icon--help" />
            Help
          </NavLink>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
