import React from 'react';
import SessionHandler from './SessionHandler';
import Sessions from '../../data/sessions';

import { 
  NavLink,
  Route,
  Redirect } from 'react-router-dom';

const Schedule = ({match}) => {
  const nowHours = new Date().getHours();
  const nowMins = new Date().getMinutes();
  const now = nowHours * 60 + nowMins;
  var currentSession = "";

  let sessions = Sessions.map((session) => {

    if (now >= session.start && now <= session.end) {
      currentSession = session.title
    }
 
    return (
      <li className="p-view-box p-session" key={session.id}>
        <NavLink to={`${match.url}/${session.title}`}  className="p-session__header">
          <div className="p-session__meta">
            <span>{session.time}</span>
            <span>{session.location}</span>
          </div>
          <h2 className="p-session__title">{session.title}</h2>
          
        </NavLink>

        <Route exact path={match.path} 
          render={ () => <Redirect to={`${match.path}/${currentSession}`} /> } />

        <Route path={`${match.path}/${session.title}`} 
          render={() => <SessionHandler id={`${session.id}`} hasSpeakers={`${session.hasSpeakers}`} path={`${match.path}/${session.title}`}  /> } />
      </li>
    );
  });

  return (
    <div>
      <ul className="p-view-boxes">
        {sessions}
      </ul>
    </div>
  )
}

export default Schedule;