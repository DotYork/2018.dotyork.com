import "./help.css";

import React from "react";
import ScrollIntoViewIfNeeded from "react-scroll-into-view-if-needed";

const Help = () => {
  return (
    <div className="b-wrapper p-help">
      <div className="b-container">
        <div className="p-section-header">
          <ScrollIntoViewIfNeeded>
            <h1 className="p-section-title">Get Help</h1>
          </ScrollIntoViewIfNeeded>
          <p className="p-section-intro">
            If you need assistance, you can get in touch with a member of the
            DotYork team at any time throughout the day.
          </p>
        </div>

        <div className="p-help-section">
          <h2 className="p-help-section__title">Finding Us</h2>
          <div className="p-help-section__body p-content">
            <p>
              DotYork staff will be wearing purple DotYork t-shirts and have
              staff lanyards. If you need help at any time, ask a member of
              staff.
            </p>
            <p>
              No-one in sight? Try the registration desk in The Hospitium for
              help throughout the day.
            </p>
          </div>
        </div>

        <div className="p-help-section">
          <h2 className="p-help-section__title">Contact Us</h2>
          <div className="p-help-section__body p-content">
            <ul>
              <li>
                <a href="mailto:help@dotyork.com">
                  <b>Email</b> help@dotyork.com
                </a>
              </li>
              <li>
                <a href="https://twitter.com/dot_york">
                  <b>Tweet</b> @dot_york
                </a>{" "}
                (DM’s are open)
              </li>
            </ul>
          </div>
        </div>

        <div className="p-help-section">
          <h2 className="p-help-section__title">Toilets</h2>
          <div className="p-help-section__body p-content">
            <p>
              Toilets are located in The Hospitium. They have been liberated
              from the gender-binary.
            </p>
          </div>
        </div>

        <div className="p-help-section">
          <h2 className="p-help-section__title">Need to get away?</h2>
          <div className="p-help-section__body p-content">
            <p>
              If you need some quiet time during sessions, there is a room to
              the left of the stage.
            </p>
          </div>
        </div>

        <div className="p-help-section">
          <h2 className="p-help-section__title">Photography</h2>
          <div className="p-help-section__body p-content">
            <p>
              This event is being photographed by Hewitt & Walker for our future
              marketing. If you’d rather we didn’t use/share any photos of you,
              you can turn around your name badge to the{" "}
              <b>'Please don’t share photos of me'</b> side.
            </p>
            <p>
              We can’t promise that we won’t <i>take</i> photos of you but we
              won’t share/publish them anywhere.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
