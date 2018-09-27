import React from "react";
import ScrollIntoViewIfNeeded from "react-scroll-into-view-if-needed";

const Help = () => {
  return (
    <div className="p-view__header">
      <ScrollIntoViewIfNeeded />
      <h1>Get Help</h1>
      <p>
        If you need assistance, you can get in touch with a member of the
        DotYork team at any time throughout the day.
      </p>
    </div>
  );
};

export default Help;
