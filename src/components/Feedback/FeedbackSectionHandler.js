import FeedbackSections from "../../data/feedbackSections";
import FormFreedom from "./FormSession";
import FormIdentity from "./FormSession";
import FormMoney from "./FormSession";
import FormOverall from "./FormOverall";
import FormSurvival from "./FormSession";
import React from "react";

const FeedbackSectionHandler = props => {
  return (
    <div className="p-session__body">
      {FeedbackSections.filter(section => section.id === `${props.id}`).map(
        section => {
          switch (section.title) {
            case "Identity":
              return (
                <FormIdentity
                  formid={section.formid}
                  key={section.formid}
                  title={section.title}
                />
              );
            case "Money":
              return (
                <FormMoney
                  formid={section.formid}
                  key={section.formid}
                  title={section.title}
                />
              );
            case "Freedom":
              return (
                <FormFreedom
                  formid={section.formid}
                  key={section.formid}
                  title={section.title}
                />
              );
            case "Survival":
              return (
                <FormSurvival
                  formid={section.formid}
                  key={section.formid}
                  title={section.title}
                />
              );
            case "DotYork 2018":
              return (
                <FormOverall
                  formid={section.formid}
                  key={section.formid}
                  title={section.title}
                />
              );
            default:
              return (
                <FormOverall
                  formid={section.formid}
                  key={section.formid}
                  title={section.title}
                />
              );
          }
        }
      )}
    </div>
  );
};

export default FeedbackSectionHandler;
