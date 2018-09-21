//  Get speaker content

import React from 'react';
import PropTypes from 'prop-types';
import Twitter from '../../assets/icons/twitter.js';

const SpeakerDetail = (props) => {
  const twitter = (username) => {
    if (username) {
      return `Tweet @${username}`
    }
    return 'Tweet';
  }
  
  return (
    <div className="p-speaker__body"> 
      <a href="" className="b-btn p-speaker__twitter-btn">
        <Twitter fill="#0C9D5E" />
        {twitter(props.speaker_twitter)}
      </a>
    </div>
  )
}

SpeakerDetail.propTypes = {
  speaker_twitter: PropTypes.string
}

export default SpeakerDetail