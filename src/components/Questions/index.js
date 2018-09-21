import React from "react";

import "./questions.css";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      question: "",
      submitted: false,
      error_question: false
    };
  }

  handleSubmit = e => {
    this.setState({ name: this.state.name });

    {
      this.state.question
        ? this.setState({ error_question: false })
        : this.setState({ error_question: true });
    }

    {
      this.state.question ? (
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "question", ...this.state })
        })
          .then(() => this.setState({ submitted: true }))
          .catch(error => alert(error))
      ) : (
        <p />
      );
    }

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  toggleForm = e => {
    this.setState({ submitted: !this.state.submitted });
    this.setState({ question: "" });
    e.preventDefault();
  };

  render() {
    const { name, question } = this.state;
    return (
      <div className="p-questions">
        <div className="p-view__header p-questions__header">
          <h1>Ask a Question</h1>
          <p>
            If you have questions for any of our panel, please complete the form
            below.
          </p>
        </div>

        <div className="p-questions__body">
          {this.state.submitted ? (
            <div>
              <p>Thanks {this.state.name}, we’ve got it.</p>

              <button onClick={this.toggleForm} className="b-btn">
                Ask another
              </button>
            </div>
          ) : (
            <form onSubmit={this.handleSubmit} className="p-questions__form">
              <input type="hidden" name="form-name" value="question" />
              <p className="p-form__field">
                <label className="p-form__label">
                  Your Name:{" "}
                  <span className="p-form__label-helper">(optional)</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                  className="p-form__input"
                />
              </p>
              <p className="p-form__field">
                <label className="p-form__label">Your Question:</label>
                <textarea
                  name="question"
                  value={question}
                  onChange={this.handleChange}
                  className="p-form__input p-form__input--textarea"
                />
                {this.state.error_question ? (
                  <p class="p-form__error">Please enter a question</p>
                ) : (
                  <p />
                )}
              </p>
              <p className="p-form__field">
                <button type="submit" className="b-btn p-form__btn">
                  Submit Question
                </button>
              </p>
            </form>
          )}
        </div>

        <div className="p-view__footer p-questions__footer">
          <p>
            Questons will be moderated and sent to Scott to ask the panel on
            stage.
          </p>
          <p>
            Any questions we don’t have time for will be sent to the speakers
            after the conference and the answers published as a blog post on
            dotyork.com.
          </p>
        </div>
      </div>
    );
  }
}

export default Questions;
