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
        <img
          alt=""
          className="p-schedule__bg"
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzEycHgiIGhlaWdodD0iNjEycHgiIHZpZXdCb3g9IjAgMCAzMTIgNjEyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1MS4zICg1NzU0NCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+U2hhcGU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iU2NoZWR1bGUtVmlldyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIC0xMjUuMDAwMDAwKSIgZmlsbD0iIzNDMzM3QyIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPGcgaWQ9ImJnLXNoYXBlLTQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE1Ni4wMDAwMDAsIDQzMS4wMDAwMDApIHJvdGF0ZSgtOTAuMDAwMDAwKSB0cmFuc2xhdGUoLTE1Ni4wMDAwMDAsIC00MzEuMDAwMDAwKSB0cmFuc2xhdGUoLTE1MC4wMDAwMDAsIDI3NS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMzYuNzYzMjY1LDAuMjUwNjIyOTUxIEMxMjAuMTEwMjA0LDkuNjMxMDgxOTcgMTAzLjg3MzQ2OSwxOS41MDQyNjIzIDg4LjA1MzA2MTIsMjkuODcwMTYzOSBDMzcuNjMxNzU1MSw2Mi45NTIzOTM0IC0xMi4xMjc1OTE4LDExMS41MDE2MzkgMy40MDk3MTQyOSwxNjIuODUzNzcgQzEzLjQwMTU1MSwxOTUuODg0ODUyIDQ5LjgwMzA2MTIsMjIwLjQ5NzA0OSA4OS42OTU0Njk0LDIzMC4wMzA5NTEgQzEyOS41ODc4NzgsMjM5LjU2NDg1MiAxNzIuNDUyODU3LDIzNi4xMTc1MDggMjEzLjAwMDk4LDIyOC42OTYgQzI0Ny4zNTYyNzIsMjIyLjM5OTM1OSAyODAuODY1NTQ0LDIxMy4zMzA5NTQgMzEzLjAzOCwyMDEuNjIzNjA3IEMzMzUuNjM4Mjg2LDE5My40MDQxOTcgMzY4LjY1NTA2MSwxNzAuMDA5MzExIDM5NC41OTAxMjIsMTc1LjQ0MTE4IEM0MzQuMzAxNDI5LDE4My43NTI2NTYgNDYzLjQ4MzgzNywyNjAuMDQ5NDQzIDQ5Mi4yOTE1NTEsMjg0LjQ3NzUwOCBDNTExLjc4MTg3OCwzMDEuMDA4MzkzIDUzOC43NTk4MzcsMzE2LjM2OCA1NjUuODc1MTg0LDMxMC40NTUzNDQgQzYwMS4zMTQ5OCwzMDIuNzI2OTUxIDYxMS4zODE3NTUsMjY1Ljc0NzI3OSA2MTEuNDEyOTgsMjM1LjcwMzIxMyBDNjExLjQ4NzkxOCwxNTMuNzQ0MzkzIDU4NS4zNDY3NzYsNzEuOTMzOTAxNiA1MzYuOTA1MTAyLDAuMjUwNjIyOTUxIEwxMzYuNzYzMjY1LDAuMjUwNjIyOTUxIFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="
        />
      </div>
    );
  }
}

export default Schedule;
