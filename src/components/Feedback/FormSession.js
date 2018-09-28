import React from "react";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relevant: "",
      interesting: "",
      submitted: false
    };
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": `${this.props.formid}`, ...this.state })
    })
      .then(() => {
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
          <div>
            <span className="b-btn p-feedback__complete">x</span>
            <p>You’ve done this one, thanks.</p>
          </div>
        ) : (
          <form onSubmit={this.handleSubmit} className="p-questions__form">
            <input type="hidden" name="form-name" value={this.props.formid} />
            <p className="p-form__field">
              <span className="p-form__label">
                Was this session <b>relevant</b> to your work?
              </span>
              <input
                type="radio"
                name="relevant"
                value="yes"
                id="relevant_yes"
                className="p-form__input--radio"
                onChange={this.handleChange}
                required
              />
              <label htmlFor="relevant_yes" className="p-form__label--radio">
                Yes
              </label>
              <input
                type="radio"
                name="relevant"
                value="no"
                id="relevant_no"
                className="p-form__input--radio"
                onChange={this.handleChange}
              />
              <label htmlFor="relevant_no" className="p-form__label--radio">
                No
              </label>
            </p>
            <p className="p-form__field">
              <span className="p-form__label">
                Did you find this session <b>interesting</b>?
              </span>
              <input
                type="radio"
                name="interesting"
                value="yes"
                id="interesting_yes"
                className="p-form__input--radio"
                onChange={this.handleChange}
                required
              />
              <label htmlFor="interesting_yes" className="p-form__label--radio">
                Yes
              </label>
              <input
                type="radio"
                name="interesting"
                value="no"
                id="interesting_no"
                className="p-form__input--radio"
                onChange={this.handleChange}
              />
              <label htmlFor="interesting_no" className="p-form__label--radio">
                No
              </label>
            </p>
            <p className="p-form__field">
              <button type="submit" className="b-btn p-form__btn">
                Complete {this.props.title} Feedback
              </button>
            </p>
          </form>
        )}
      </div>
    );
  }
}

export default SessionForm;
