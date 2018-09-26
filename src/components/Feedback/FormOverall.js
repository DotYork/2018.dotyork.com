import React from "react";

const OverallForm = ({ match }) => {
  return (
    <form className="p-questions__form">
      <p className="p-form__field">
        <span className="p-form__label">
          How would you rate this session?&nbsp;
          <span className="p-form__label-helper">(5 = great)</span>
        </span>
        <input
          type="radio"
          name="session_score"
          value="1"
          id="sessionScore_one"
          className="p-form__input--radio"
        />
        <label for="sessionScore_one" className="p-form__label--radio">
          1
        </label>
        <input
          type="radio"
          name="session_score"
          value="2"
          id="sessionScore_two"
          className="p-form__input--radio"
        />
        <label for="sessionScore_two" className="p-form__label--radio">
          2
        </label>
        <input
          type="radio"
          name="session_score"
          value="3"
          id="sessionScore_three"
          className="p-form__input--radio"
        />
        <label for="sessionScore_three" className="p-form__label--radio">
          3
        </label>
        <input
          type="radio"
          name="session_score"
          value="4"
          id="sessionScore_four"
          className="p-form__input--radio"
        />
        <label for="sessionScore_four" className="p-form__label--radio">
          4
        </label>
        <input
          type="radio"
          name="session_score"
          value="5"
          id="sessionScore_five"
          className="p-form__input--radio"
        />
        <label for="sessionScore_five" className="p-form__label--radio">
          5
        </label>
      </p>
      <p className="p-form__field">
        <span className="p-form__label">
          Did you find DotYork value for money?
        </span>
        <input
          type="radio"
          name="value"
          value="yes"
          id="value_yes"
          className="p-form__input--radio"
        />
        <label for="value_yes" className="p-form__label--radio">
          Yes
        </label>
        <input
          type="radio"
          name="value"
          value="no"
          id="value_no"
          className="p-form__input--radio"
        />
        <label for="value_no" className="p-form__label--radio">
          No
        </label>
      </p>
      <p className="p-form__field">
        <span className="p-form__label">
          Do you think DotYork represents York well?
        </span>
        <input
          type="radio"
          name="york"
          value="yes"
          id="york_yes"
          className="p-form__input--radio"
        />
        <label for="york_yes" className="p-form__label--radio">
          Yes
        </label>
        <input
          type="radio"
          name="york"
          value="no"
          id="york_no"
          className="p-form__input--radio"
        />
        <label for="york_no" className="p-form__label--radio">
          No
        </label>
      </p>
      <p className="p-form__field">
        <span className="p-form__label">
          Would you like to see more technical/practical talks at DotYork?
        </span>
        <input
          type="radio"
          name="tech"
          value="yes"
          id="tech_yes"
          className="p-form__input--radio"
        />
        <label for="tech_yes" className="p-form__label--radio">
          Yes
        </label>
        <input
          type="radio"
          name="tech"
          value="no"
          id="tech_no"
          className="p-form__input--radio"
        />
        <label for="tech_no" className="p-form__label--radio">
          No
        </label>
      </p>
      <p className="p-form__field">
        <span className="p-form__label">
          Would you attend DotYork again in the future?
        </span>
        <input
          type="radio"
          name="attendAgain"
          value="yes"
          id="attendAgain_yes"
          className="p-form__input--radio"
        />
        <label for="attendAgain_yes" className="p-form__label--radio">
          Yes
        </label>
        <input
          type="radio"
          name="attendAgain"
          value="no"
          id="attendAgain_no"
          className="p-form__input--radio"
        />
        <label for="attendAgain_no" className="p-form__label--radio">
          No
        </label>
      </p>
      <p className="p-form__field">
        <label for="comments" className="p-form__label">
          Any other comments?
        </label>
        <textarea
          id="comments"
          className="p-form__input p-form__input--textarea"
        />
      </p>
      <p className="p-form__field">
        <label for="email" className="p-form__label">
          If you’d like to be entered into a prize draw to win a £50
          Amazon.co.uk voucher, please tell us your email address:
        </label>
        <input type="email" id="email" className="p-form__input" />
      </p>
      <p className="p-form__field">
        <button type="submit" className="b-btn p-form__btn">
          Submit ‘Overall’ Section
        </button>
      </p>
    </form>
  );
};

export default OverallForm;
