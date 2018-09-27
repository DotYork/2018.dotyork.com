import React from "react";
import SessionHandler from "./SessionHandler";
import Sessions from "../../data/sessions";

import { NavLink, Route, Redirect } from "react-router-dom";

const Schedule = () => {
  const nowHours = new Date().getHours();
  const nowMins = new Date().getMinutes();
  const now = nowHours * 60 + nowMins;
  var currentSession = "";

  let sessions = Sessions.map(session => {
    if (now >= session.start && now <= session.end) {
      currentSession = session.path;
    }

    return (
      <li className="p-view-box p-session" key={session.id}>
        <NavLink to={`/schedule/${session.path}`} className="p-session__header">
          <div className="p-session__meta">
            <span>{session.time}</span>
            <span>{session.location}</span>
          </div>
          <h2 className="p-session__title js-altFont">{session.title}</h2>
        </NavLink>

        <Route
          exact
          path="/schedule"
          render={() => <Redirect to={`/schedule/${currentSession}`} />}
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
    <div>
      <ul className="p-view-boxes">{sessions}</ul>
    </div>
  );
};

export default Schedule;
