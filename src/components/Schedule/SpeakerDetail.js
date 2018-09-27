//  Get speaker content

import React from "react";
import PropTypes from "prop-types";
import Twitter from "../../assets/icons/twitter.js";
import { NavLink } from "react-router-dom";

const SpeakerDetail = props => {
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
    <div className="p-speaker__body">
      <a
        href={twitterURL(props.speaker_twitter)}
        className="b-btn p-speaker__twitter-btn"
      >
        <Twitter fill="#0C9D5E" />
        {twitterLinkText(props.speaker_twitter)}
      </a>

      <NavLink to={`/questions?for=${props.speaker_name}`} className="b-btn">
        Ask a Question
      </NavLink>
    </div>
  );
};

SpeakerDetail.propTypes = {
  speaker_twitter: PropTypes.string
};

export default SpeakerDetail;
