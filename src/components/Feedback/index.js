import React from "react";
import FeedbackSectionHandler from "./FeedbackSectionHandler";
import { NavLink, Route } from "react-router-dom";

import FeedbackSections from "../../data/feedbackSections";

import "./feedback.css";

const Feedback = ({ match }) => {
  let sections = FeedbackSections.map(section => {
    return (
      <li id="section.id" className="p-feedback__section" key="{section.id}">
        <NavLink
          to={`${match.url}/${section.title}`}
          className="p-feedback__header"
        >
          <h2 className="p-feedback__section-heading">{section.title}</h2>
          <span className="b-btn p-feedback__start">Start</span>
        </NavLink>

        <Route
          path={`${match.path}/${section.title}`}
          render={() => (
            <FeedbackSectionHandler
              id={`${section.id}`}
              path={`${match.path}/${section.title}`}
            />
          )}
        />
      </li>
    );
  });

  return (
    <div>
      <div className="p-view__header">
        <h1>What Did You Think?</h1>
        <p>
          Your opinion really matters, it helps us figure out what we need to do
          in the future with DotYork.
        </p>
        <p>
          Complete all sections to be entered into a draw to win a £50
          Amazon.co.uk voucher AND receive a free drink at the conference
          after-party.
        </p>
      </div>

      <ul className="p-viewBoxes">{sections}</ul>
    </div>
  );
};

export default Feedback;
