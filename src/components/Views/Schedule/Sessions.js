import React from 'react';
import Sessions from '../../../data/sessions';
import Speakers from '../../../data/speakers';

import { 
  NavLink,
  Route } from 'react-router-dom';

// components
import SpeakerHandler from './SpeakerHandler';

const SessionHandler = (props) => {

  if (props.hasSpeakers === "true") {
   let speakers = Speakers 
                  .filter(speaker => speaker.session_id === `${props.id}`)
                  .map((speaker) => {
      return (
        <li className="p-speaker">
          <div className="p-speaker__header">
            <NavLink to={`${props.path}/${speaker.name}`}>
              <img className="p-speaker__photo" src={speaker.photo} alt={speaker.name} />
              <div>
                <h3 className="p-speaker__name">{speaker.name}</h3>
                <p className="p-speaker__talk-title">{speaker.talk}</p>
              </div>
            </NavLink>
          </div>
          
            

            <Route path={`${props.path}/${speaker.name}`} 
              render={() => <SpeakerHandler id={`${speaker.id}`}/> } />
        </li>
      )
    }); 

    return (
      <div className="p-session__body">
        <ul className="p-speakers">
          {speakers}
        </ul>
      </div>
    )
  } else {
    let currentSession = Sessions 
                  .filter(session => session.id === `${props.id}`)
                  .map((session) => {
      return (
        <p>{session.content}</p>
      )
    }); 
    return (
      <div className="p-session__body">{currentSession}</div>
    )
  }
}

export default SessionHandler;