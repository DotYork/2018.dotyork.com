//  Get speaker content

import React from 'react';
import PropTypes from 'prop-types';

const SpeakerDetail = (props) => {
  const twitter = (username) => {
    if (username) {
      return `Tweet @${username}`
    }
    return 'Tweet';
  }
  
  return (
    <div className="p-speaker__body"> 
      <a href="" className="b-btn b-btn--tweet">{twitter(props.speaker_twitter)}</a>
    </div>
  )
}

SpeakerDetail.propTypes = {
  speaker_twitter: PropTypes.string
}

export default SpeakerDetail