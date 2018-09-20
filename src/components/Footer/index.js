import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => (
  <footer className="p-footer">
    <div className="b-container">
      <ul className="p-footer__menu">
        <li><NavLink to="/schedule">Schedule</NavLink></li>
        <li><NavLink to="/questions">Ask Questions</NavLink></li>
        <li><NavLink to="/feedback">Give Feedback</NavLink></li>
        <li><NavLink to="/help">Get Help</NavLink></li>
      </ul>    
    </div>
  </footer>
);

export default Footer;