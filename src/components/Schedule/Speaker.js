import React from 'react';
import Speakers from '../../data/speakers';

import { 
  NavLink,
  Route } from 'react-router-dom';

// components
import SpeakerDetail from './SpeakerDetail';

  
  
const Speaker = (props) => {
  let speakers = Speakers 
                  .filter(speaker => speaker.session_id === `${props.session_id}`)
                  .map((speaker) => {
    return (
      <li className="p-speaker">
        <div className="p-speaker__header">
          <NavLink to={`${props.session_path}/${speaker.name}`}>
            <img className="p-speaker__photo" src={speaker.photo} alt={speaker.name} />
            <div>
              <h3 className="p-speaker__name">{speaker.name}</h3>
              <p className="p-speaker__talk-title">{speaker.talk}</p>
            </div>
          </NavLink>
        </div>
          <Route path={`${props.session_path}/${speaker.name}`} 
            render={() => <SpeakerDetail id={`${speaker.id}`}/> } />
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
}
  
  export default Speaker;