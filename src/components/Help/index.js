import React from "react";
import ScrollIntoViewIfNeeded from "react-scroll-into-view-if-needed";

import "./help.css";

const Help = () => {
  return (
    <div className="b-wrapper p-help">
      <div className="b-container">
        <div className="p-section-header">
          <ScrollIntoViewIfNeeded />
          <h1 className="p-section-title">Get Help</h1>
          <p className="p-section-intro">
            If you need assistance, you can get in touch with a member of the
            DotYork team at any time throughout the day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Help;
