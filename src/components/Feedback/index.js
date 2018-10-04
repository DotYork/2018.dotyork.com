import "./feedback.css";

import { NavLink, Route } from "react-router-dom";

import FeedbackSectionHandler from "./FeedbackSectionHandler";
import FeedbackSections from "../../data/feedbackSections";
import React from "react";
import ScrollIntoViewIfNeeded from "react-scroll-into-view-if-needed";

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
              <span className="p-feedback__status is-complete">Done</span>
            ) : (
              <span className="p-feedback__status">Start</span>
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
      <div className="b-wrapper p-feedback">
        <div className="b-container">
          <ScrollIntoViewIfNeeded />
          <div className="p-section-header">
            <h1 className="p-section-title">What Did You Think?</h1>
            <div className="p-section-intro">
              <p>
                Your opinion really matters, it helps us figure out what we need
                to do in the future with DotYork.
              </p>
              <p>
                Complete all sections to be entered into a draw to win a £50
                Amazon.co.uk voucher AND receive a free drink at the conference
                after-party.
              </p>
            </div>
          </div>

          <ul className="p-viewBoxes">{sections}</ul>
        </div>
        <img
          alt=""
          className="p-feedback__bg"
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzA5cHgiIGhlaWdodD0iMTAwOXB4IiB2aWV3Qm94PSIwIDAgNzA5IDEwMDkiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjMgKDU3NTQ0KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BcnRib2FyZCAyPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IkFydGJvYXJkLTIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJiZy1zaGFwZS0xIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1ODIuNTAwMDAwLCA0OTYuMDAwMDAwKSByb3RhdGUoLTI3MC4wMDAwMDApIHRyYW5zbGF0ZSgtNTgyLjUwMDAwMCwgLTQ5Ni4wMDAwMDApIHRyYW5zbGF0ZSg4Ny4wMDAwMDAsIDk2LjAwMDAwMCkiIGZpbGw9IiMzQzMzN0MiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOS4wNywyOTEuNTkgQzEzLDI1Ni4wNyAxLDIxNy41IDQsMTc4LjY0IEM3LDEzOS43OCAyNy43MiwxMDAuNjQgNjIuODcsODMuNzEgQzEzNy4xMiw0OC4wMyAyMDQuMTcsMTIzLjU1IDI1NC4zNSwxNzIuMTggQzI4NC42NiwyMDEuNTUgMzIyLjA5LDIyNy43IDM1Ny44NSwyNTAuNTIgQzM2MS43NywyNTMuMDIgMzY2LDI1NS4zOCAzNzAuNjMsMjU1LjY2IEMzNzguNTIsMjU2LjE0IDM4NS44NSwyNTAuMDMgMzg4LjM0LDI0Mi41MyBDMzkyLjk5LDIyOC41MyAzODIuOTMsMjE3Ljc2IDM3Ny4xNSwyMDYuMDggQzM2OS43NSwxOTEuMSAzNjIuMzM2NjY3LDE3Ni4xMyAzNTQuOTEsMTYxLjE3IEMzNDMsMTM3IDMzMC43NiwxMTIgMzI5LjE3LDg1LjA1IEMzMjcuNTgsNTguMSAzMzkuMzcsMjguNTEgMzYzLjk0LDE3LjM1IEMzODkuNTMsNS43NCA0MTkuNTUsMTcuMTEgNDQzLjY1LDMxLjU3IEM0ODkuNzM1ODIsNTkuMzA5NTA2NCA1MjguMTk0NjI4LDk4LjA4MTA0MzYgNTU1LjU2LDE0NC4zOSBDNTY0LjIzLDE1OS4xIDU3Mi4yMiwxNzQuMjEgNTgxLjE4LDE4OC43NSBDNTkwLjQyLDIwMy43NSA2MDAuMzEsMjEyLjg2IDYxMy43NywyMjQuMDQgQzYxOC43MSwyMjguMTUgNjI0LjM1LDIzMi40OSA2MzAuNzcsMjMyLjA0IEM2MzUuMjIsMjMxLjczIDYzOS4yNiwyMjkuMDQgNjQyLjAxLDIyNS41MyBDNjQ0LjYzNjc0MSwyMjEuOTA4OTYgNjQ2LjUxOTY5MSwyMTcuODAzMTc4IDY0Ny41NSwyMTMuNDUgQzY1NC40OCwxODguNDUgNjQwLjk3LDE2Ny4yMSA2MzUuNTUsMTQyLjkyIEM2MzAuMDcsMTE4LjQgNjI3Ljg4LDkyLjU1IDYzNy40NSw2OC43MSBDNjUwLjgzLDM1LjM2IDY4NC42LDEzLjcxIDcxOS40NSw1LjE1IEM3OTYuMDQsLTEzLjY1IDg3OS41OCwyMy43IDkyOC4yNiw4NS43NiBDOTc2Ljk0LDE0Ny44MiA5OTQuMDksMjMwLjIzIDk4OS40MSwzMDguOTYgQzk4NC43MywzODcuNjkgOTYwLDQ2My43OSA5MzIuMDksNTM3LjU0IEM4OTguNjMsNjI1Ljg5IDg1NS42Myw3MTcuOTIgNzc0LjY4LDc2Ni42MyBDNzM3Ljc4MzM5Niw3ODguNzQzNjA0IDY5NS40ODM1MDcsODAwLjIwNzI1MSA2NTIuNDcsNzk5Ljc1IEM2NDQuOTEsNzk5LjY2IDYzNy4wMyw3OTkuMSA2MzAuNDcsNzk1LjM1IEM2MjMuOTEsNzkxLjYgNjE5LjYyLDc4NS4zNSA2MTUuOTQsNzc4Ljk3IEM1OTEuODIsNzM2Ljk3IDU5My4wMyw2ODEuNjQgNjE4Ljk0LDY0MC43NSBDNjMxLjA3LDYyMS42MyA2NDcuOTQsNjA1Ljc1IDY1OS4zNiw1ODYuMjMgQzY3MC43OCw1NjYuNzEgNjc1Ljg4LDU0MC43MyA2NjMuMTcsNTIxLjk5IEM2NjAuMzUsNTE3Ljg0IDY1Ni40OSw1MTQuMDYgNjUxLjYxLDUxMi44NyBDNjQ1LjM1LDUxMS4zNSA2MzguOTYsNTE0LjM0IDYzMy4yNiw1MTcuMzQgQzU4NS45MTE2MTMsNTQyLjIyNzYgNTQxLjk5MTc5OCw1NzMuMTUyMzEzIDUwMi42LDYwOS4zNCBDNDgxLjUsNjI4Ljc0IDQ2MC43OSw2NTAuMjIgNDMzLjc2LDY1OS43NiBDNDA2LjczLDY2OS4zIDM3MS4wMyw2NjEuOTYgMzU5LjM0LDYzNS43NiBDMzM4LjYsNTg5LjM1IDQwNi45NCw1NDAuODQgMzkyLjM0LDQ5Mi4xNiBDMzE0LjQ4LDU3Ni41OCAyMDkuNzYsNjM1Ljg1IDk3LjM0LDY1OS4xNiBDNjMuNjQsNjY2LjE2IDIwLjI0LDY2NS41MiA0LjgsNjM0Ljc2IEMtNyw2MTEuMjMgNS4wNyw1ODIuODcgMTkuODgsNTYxLjExIEM0MS43Niw1MjkgMTIxLjc2LDQ4NC4zOSAxMjMuNSw0NDYgQzEyNC42Myw0MjAuOTEgOTIuMDksMzk2IDc4LjU1LDM3Ny4xOSBDNTkuMjcxNDgwOSwzNTAuMzcwNTUyIDQyLjY5NzIxNjYsMzIxLjcwNzI1OCAyOS4wNywyOTEuNjIiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"
        />
      </div>
    );
  }
}

export default Feedback;
