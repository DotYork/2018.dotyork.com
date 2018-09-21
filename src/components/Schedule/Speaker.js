//  Returns speaker from array

import React from 'react';
import PropTypes from 'prop-types';
import { 
  NavLink,
  Route } from 'react-router-dom';

// components
import SpeakerHandler from './SpeakerHandler';

// css
import './speaker.css';

const Speaker = (props) => {
  return (
    <li className="p-speaker">
      <div className="p-speaker__header">
        <NavLink to={`${props.session_path}/${props.speaker_name}`}>
          <img className="p-speaker__photo" src={props.speaker_photo} alt={props.speaker_name} />
          <div>
            <h3 className="p-speaker__name">{props.speaker_name}</h3>
            <p className="p-speaker__talk-title">{props.speaker_talk}</p>
          </div>
        </NavLink>
      </div>
        <Route 
          path={`${props.session_path}/${props.speaker_name}`} 
          render={() =>  <SpeakerHandler id={`${props.speaker_id}`} /> } 
        />
    </li>
  )
}

Speaker.propTypes = {
  session_id: PropTypes.string.isRequired,
  session_path: PropTypes.string.isRequired,
  speaker_name: PropTypes.string.isRequired,
  speaker_photo: PropTypes.string.isRequired,
  speaker_talk: PropTypes.string.isRequired,
  speaker_id: PropTypes.string.isRequired
}
  
export default Speaker;