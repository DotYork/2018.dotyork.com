import React from "react";
import FormIdentity from "./FormSession";
import FormMoney from "./FormSession";
import FormFreedom from "./FormSession";
import FormSurvival from "./FormSession";
import FormOverall from "./FormOverall";

import FeedbackSections from "../../data/feedbackSections";

const FeedbackSectionHandler = props => {
  return (
    <div className="p-session__body">
      {FeedbackSections.filter(section => section.id === `${props.id}`).map(
        (section, index) => {
          switch (section.title) {
            case "Identity":
              return (
                <FormIdentity formid={section.formid} title={section.title} />
              );
            case "Money":
              return (
                <FormMoney formid={section.formid} title={section.title} />
              );
            case "Freedom":
              return (
                <FormFreedom formid={section.formid} title={section.title} />
              );
            case "Survival":
              return (
                <FormSurvival formid={section.formid} title={section.title} />
              );
            case "Overall":
              return (
                <FormOverall formid={section.formid} title={section.title} />
              );
          }
        }
      )}
    </div>
  );
};

export default FeedbackSectionHandler;
