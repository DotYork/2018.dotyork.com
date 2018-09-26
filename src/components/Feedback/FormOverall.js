import React from "react";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class OverallForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      york: "",
      tech: "",
      attendAgain: "",
      comments: "",
      email: "",
      submitted: false
    };
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "feedback_form_overall", ...this.state })
    })
      .then(() => this.setState({ submitted: true }))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="p-questions__form">
          <input type="hidden" name="form-name" value="feedback_form_overall" />
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
            />
          </p>
          <p className="p-form__field">
            <label for="email" className="p-form__label">
              If you’d like to be entered into a prize draw to win a £50
              Amazon.co.uk voucher, please tell us your email address:
            </label>
            <input
              type="email"
              id="email"
              className="p-form__input"
              onChange={this.handleChange}
            />
          </p>
          <p className="p-form__field">
            <button type="submit" className="b-btn p-form__btn">
              Complete DY18 Feedback
            </button>
          </p>
        </form>
      </div>
    );
  }
}

export default OverallForm;
