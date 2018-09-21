//  Session returns the session object if the session has no speakers

import React from 'react';
import Sessions from '../../data/sessions';

const Session = (props) => {

  let currentSession = Sessions 
                        .filter(session => session.id === `${props.session_id}`)
                        .map((session) => {
    return (
      <p>{session.content}</p>
    )
  }); 
  return (
    <div className="p-session__body">{currentSession}</div>
  )
}

export default Session;