//  SessionHandler tells App what to return for each speaker

import React from "react";
import PropTypes from "prop-types";

// components
import SpeakerDetail from "./SpeakerDetail";

// data
import Speakers from "../../data/speakers";

const SpeakerHandler = props => {
  return Speakers.filter(speaker => speaker.id === `${props.id}`).map(
    (speaker, index) => {
      return (
        <SpeakerDetail
          key={index}
          speaker_twitter={speaker.twitter}
          speaker_name={speaker.name}
        />
      );
    }
  );
};

SpeakerHandler.propTypes = {
  id: PropTypes.string.isRequired
};

export default SpeakerHandler;
