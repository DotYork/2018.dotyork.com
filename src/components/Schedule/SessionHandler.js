//  SessionHandler tells App what to return for each session
//    if it has a speaker, return speaker object, otherwise return session objet

import React from 'react';

// components
import Speaker from './Speaker';
import Session from './Session';

const SessionHandler = (props) => {

  if (props.hasSpeakers === "true") {
    return(
      <Speaker session_id={props.id} session_path={props.path} /> 
    )
  } else {
    return (
      <Session session_id={props.id} />
    )
  }
}

export default SessionHandler;