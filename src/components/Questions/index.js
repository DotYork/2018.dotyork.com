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
      name: localStorage.getItem(`name`),
      question: "",
      submitted: false,
      error_question: false
    };
  }

  handleSubmit = e => {
    this.setState({ name: this.state.name });

    if (this.state.question) {
      this.setState({ error_question: false });

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "question", ...this.state })
      })
        .then(() => {
          this.setState({ submitted: true });
          localStorage.setItem(`name`, this.state.name);
        })
        .catch(error => alert(error));
    } else {
      this.setState({ error_question: true });
    }

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  toggleForm = e => {
    this.setState({ submitted: !this.state.submitted });
    this.setState({ name: localStorage.getItem(`name`) });
    this.setState({ question: "" });
    e.preventDefault();
  };

  render() {
    const { name, question } = this.state;
    const queryString = require("query-string");
    var parsed = queryString.parse(this.props.location.search);

    return (
      <div className="p-questions">
        <div className="p-view__header p-questions__header">
          <h1>Ask a Question</h1>
          <p>
            If you have questions for any of our panel, please complete the form
            below.
            {parsed.for}
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
              <p class="p-form__field">
                <label className="p-form__label">
                  Who is Your Question For:
                  {this.props.speaker_name}
                </label>
                <select
                  className="p-form__input p-form__input--select"
                  name="question_for"
                  value={parsed.for}
                  onChange={this.handleChange}
                >
                  <option>Please Select</option>
                  <optgroup label="Identity" />
                  <option value="Identity Panel">Identity Panel</option>
                  <option value="Simon Collison">Simon Collison</option>
                  <option value="Karen Fielding">Karen Fielding</option>
                  <option value="Isaiah Hull">Isaiah Hull</option>
                  <option value="Helen Joy">Helen Joy</option>

                  <optgroup label="Money" />
                  <option value="Money Panel">Money Panel</option>
                  <option value="Neil Costello">Neil Costello</option>
                  <option value="Nic Hemley">Nic Hemley</option>
                  <option value="Kenda Macdonald">Kenda Macdonald</option>
                  <option value="Doug Winter">Doug Winter</option>

                  <optgroup label="Freedom" />
                  <option value="Freedom Panel">Freedom Panel</option>
                  <option value="Matthew De Abaitua">Matthew De Abaitua</option>
                  <option value="Alexandra Deschamps-Sonsino">
                    Alexandra Deschamps-Sonsino
                  </option>
                  <option value="Tom Phillips">Tom Phillips</option>
                  <option value="Anna Powell-Smith">Anna Powell-Smith</option>

                  <optgroup label="Survival" />
                  <option value="Survival Panel">Survival Panel</option>
                  <option value="Mary Clear">Mary Clear</option>
                  <option value="Ian Jindal">Ian Jindal</option>
                  <option value="Dominic Sutton">Dominic Sutton</option>
                  <option value="Bethan Vincent">Bethan Vincent</option>
                </select>
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
                  <span class="p-form__error">Please enter a question</span>
                ) : (
                  <span />
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
