import React from "react";
import FeedbackSectionHandler from "./FeedbackSectionHandler";
import ScrollIntoViewIfNeeded from "react-scroll-into-view-if-needed";
import { NavLink, Route } from "react-router-dom";

import FeedbackSections from "../../data/feedbackSections";

import "./feedback.css";

class Feedback extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      overall_submitted: false
    };
  }

  render() {
    let sections = FeedbackSections.map(section => {
      return (
        <li id={section.id} className="p-feedback__section" key={section.id}>
          <NavLink
            to={`/feedback/${section.title}`}
            className="p-feedback__header"
          >
            <h2 className="p-feedback__section-heading">{section.title}</h2>

            {localStorage.getItem(`${section.formid}_submitted`) ? (
              <span className="b-btn p-feedback__complete">x</span>
            ) : (
              <span className="b-btn p-feedback__start">Start</span>
            )}
          </NavLink>

          <Route
            path={`/feedback/${section.title}`}
            render={() => (
              <FeedbackSectionHandler
                id={`${section.id}`}
                path={`/feedback/${section.title}`}
              />
            )}
          />
        </li>
      );
    });

    return (
      <div>
        <ScrollIntoViewIfNeeded />
        <div className="p-view__header">
          <h1>What Did You Think?</h1>
          <p>
            Your opinion really matters, it helps us figure out what we need to
            do in the future with DotYork.
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
  }
}

export default Feedback;
