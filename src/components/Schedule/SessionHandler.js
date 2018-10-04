//  SessionHandler tells App what to return for each session
//    if it has a speaker, return speaker object, otherwise return session objet

// css
import "./session.css";

import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";
import ScrollIntoViewIfNeeded from "react-scroll-into-view-if-needed";
import Session from "./Session";
import Sessions from "../../data/sessions";
// components
import Speaker from "./Speaker";
// data
import Speakers from "../../data/speakers";

const SessionHandler = props => {
  if (props.hasSpeakers === "true") {
    return (
      <div className="p-session__body">
        <ScrollIntoViewIfNeeded>
          <ul className="p-speakers">
            {Speakers.filter(
              speaker => speaker.session_id === `${props.id}`
            ).map((speaker, index) => {
              return (
                <Speaker
                  key={speaker.id}
                  session_id={props.id}
                  session_path={props.path}
                  speaker_name={speaker.name}
                  speaker_photo={speaker.photo}
                  speaker_talk={speaker.talk}
                  speaker_id={speaker.id}
                  speaker_twitter={speaker.twitter}
                />
              );
            })}
          </ul>
        </ScrollIntoViewIfNeeded>

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
        <ScrollIntoViewIfNeeded>
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
        </ScrollIntoViewIfNeeded>
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
