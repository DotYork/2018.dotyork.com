//  Returns speaker from array

import React from "react";
import PropTypes from "prop-types";
import { NavLink, Route } from "react-router-dom";

// components
import Twitter from "../../assets/icons/twitter.js";

// css
import "./speaker.css";

const Speaker = props => {
  const twitterLinkText = username => {
    if (username) {
      return `Tweet @${username}`;
    }
    return "Tweet";
  };

  const twitterURL = username => {
    if (username) {
      return `https://twitter.com/intent/tweet?via=${username}&hashtags=DotYork`;
    }
    return "https://twitter.com/intent/tweet?hashtags=DotYork";
  };

  return (
    <li className="p-speaker">
      <div className="p-speaker__photo">
        <img src={props.speaker_photo} alt={props.speaker_name} />
      </div>

      <div className="p-speaker__body">
        <h3 className="p-speaker__name">{props.speaker_name}</h3>
        <p className="p-speaker__talk-title">{props.speaker_talk}</p>

        <div className="p-speaker__links">
          <a
            href={twitterURL(props.speaker_twitter)}
            className="p-speaker__twitter-btn"
          >
            {twitterLinkText(props.speaker_twitter)}
          </a>

          <NavLink to={`/questions?for=${props.speaker_name}`} className="">
            Ask a Question
          </NavLink>
        </div>
      </div>
    </li>
  );
};

Speaker.propTypes = {
  session_id: PropTypes.string.isRequired,
  session_path: PropTypes.string.isRequired,
  speaker_name: PropTypes.string.isRequired,
  speaker_photo: PropTypes.string.isRequired,
  speaker_talk: PropTypes.string.isRequired,
  speaker_id: PropTypes.string.isRequired
};

export default Speaker;
