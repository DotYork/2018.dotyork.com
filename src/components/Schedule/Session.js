//  Session returns the session object if the session has no speakers

import React from 'react';
import PropTypes from 'prop-types';

const Session = (props) => {
  return (
    <p>{props.session_content}</p>
  )
}

Session.propTypes = {
  session_id: PropTypes.string.isRequired,
  session_content: PropTypes.string.isRequired
}

export default Session;