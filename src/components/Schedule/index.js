import React from "react";
import SessionHandler from "./SessionHandler";
import Sessions from "../../data/sessions";

import { NavLink, Route, Redirect } from "react-router-dom";

class Schedule extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      now: new Date().getHours() * 60 + new Date().getMinutes(),
      currentSession: ""
    };
  }

  render() {
    let sessions = Sessions.map(session => {
      if (this.state.now >= session.start && this.state.now <= session.end) {
        this.state.currentSession = session.path;
      }

      return (
        <li id={session.id} className="p-session" key={session.id}>
          <NavLink
            to={`/schedule/${session.path}`}
            className="p-session__header"
          >
            <h2 className="p-session__title js-altFont">{session.title}</h2>
            <div className="p-session__meta">
              <span>{session.time}</span>
            </div>
          </NavLink>

          <Route
            exact
            path="/schedule"
            render={() => (
              <Redirect to={`/schedule/${this.state.currentSession}`} />
            )}
          />

          <Route
            path={`/schedule/${session.path}`}
            render={() => (
              <SessionHandler
                id={`${session.id}`}
                hasSpeakers={`${session.hasSpeakers}`}
                path={`/schedule/${session.path}`}
                title={session.title}
              />
            )}
          />
        </li>
      );
    });

    return (
      <div className="p-schedule">
        <div className="b-container">
          <ul className="p-schedule-list">{sessions}</ul>
        </div>
        <span className="p-schedule__bg" />
      </div>
    );
  }
}

export default Schedule;
