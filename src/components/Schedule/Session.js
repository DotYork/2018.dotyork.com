//  Session returns the session object if the session has no speakers

import React from "react";
import PropTypes from "prop-types";

function createHTML(content) {
  return { __html: `${content}` };
}

const Session = props => {
  return (
    <div
      dangerouslySetInnerHTML={createHTML(props.session_content)}
      className="p-content"
    />
  );
};

Session.propTypes = {
  session_id: PropTypes.string.isRequired,
  session_content: PropTypes.string.isRequired
};

export default Session;
