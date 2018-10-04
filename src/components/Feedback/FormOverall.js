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
      .then(props => {
        this.setState({ submitted: true });
        localStorage.setItem(`${this.props.formid}_submitted`, true);
      })
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        {localStorage.getItem(`${this.props.formid}_submitted`) ||
        this.state.submitted ? (
          <div className="p-feedback__form is-complete">
            <span className="p-feedback__status is-complete is-absolute">
              Done
            </span>
            <p>Thanks!</p>
          </div>
        ) : (
          <form onSubmit={this.handleSubmit} className="p-feedback__form">
            <input
              type="hidden"
              name="form-name"
              value="feedback_form_overall"
            />
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
                required
              />
              <label htmlFor="value_yes" className="p-form__label--radio">
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
              <label htmlFor="value_no" className="p-form__label--radio">
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
                required
              />
              <label htmlFor="york_yes" className="p-form__label--radio">
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
              <label htmlFor="york_no" className="p-form__label--radio">
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
                required
              />
              <label htmlFor="tech_yes" className="p-form__label--radio">
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
              <label htmlFor="tech_no" className="p-form__label--radio">
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
                required
              />
              <label htmlFor="attendAgain_yes" className="p-form__label--radio">
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
              <label htmlFor="attendAgain_no" className="p-form__label--radio">
                No
              </label>
            </p>
            <p className="p-form__field">
              <label htmlFor="comments" className="p-form__label">
                Any other comments?{" "}
                <span className="p-form__label-helper">(optional)</span>
              </label>
              <textarea
                id="comments"
                className="p-form__input p-form__input--textarea"
                name="comments"
                onChange={this.handleChange}
              />
            </p>
            <p className="p-form__field">
              <label htmlFor="email" className="p-form__label">
                If you’d like to be entered into a prize draw to win a £50
                Amazon.co.uk voucher, please tell us your email address:&nbsp;
                <span className="p-form__label-helper">(optional)</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
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
        )}
      </div>
    );
  }
}

export default OverallForm;
