//  SessionHandler tells App what to return for each session
//    if it has a speaker, return speaker object, otherwise return session objet

import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import ScrollIntoViewIfNeeded from "react-scroll-into-view-if-needed";

// components
import Speaker from "./Speaker";
import Session from "./Session";

// data
import Speakers from "../../data/speakers";
import Sessions from "../../data/sessions";

// css
import "./session.css";

const SessionHandler = props => {
  if (props.hasSpeakers === "true") {
    return (
      <div className="p-session__body">
        <ScrollIntoViewIfNeeded />
        <ul className="p-speakers">
          {Speakers.filter(speaker => speaker.session_id === `${props.id}`).map(
            (speaker, index) => {
              return (
                <Speaker
                  key={index}
                  session_id={props.id}
                  session_path={props.path}
                  speaker_name={speaker.name}
                  speaker_photo={speaker.photo}
                  speaker_talk={speaker.talk}
                  speaker_id={speaker.id}
                  speaker_twitter={speaker.twitter}
                />
              );
            }
          )}
        </ul>

        <ul className="p-session__links">
          <li>
            <NavLink to={`/questions?for=${props.title} Panel`}>
              Ask a Question
            </NavLink>
          </li>
          <li>
            <NavLink to={`/feedback/${props.title}`}>Give Feedback</NavLink>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="p-session__body">
        <ScrollIntoViewIfNeeded />
        {Sessions.filter(session => session.id === `${props.id}`).map(
          (session, index) => {
            return (
              <Session
                key={index}
                session_id={props.id}
                session_content={session.content}
              />
            );
          }
        )}
      </div>
    );
  }
};

SessionHandler.propTypes = {
  id: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default SessionHandler;
