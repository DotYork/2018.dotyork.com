import "./questions.css";

import React from "react";
import ScrollIntoViewIfNeeded from "react-scroll-into-view-if-needed";

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
      error_question: false,
      error_select: false
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
      <div className="b-wrapper p-questions">
        <div className="b-container">
          <div className="p-section-header">
            <ScrollIntoViewIfNeeded>
              <h1 className="p-section-title">Ask a Question</h1>
            </ScrollIntoViewIfNeeded>
            <p className="p-section-intro">
              If you have questions for any of our panel, please complete the
              form below.
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
                    value={name || ""}
                    onChange={this.handleChange}
                    className="p-form__input"
                  />
                </p>
                <p className="p-form__field">
                  <label className="p-form__label">
                    Who is Your Question For:
                    {this.props.speaker_name}
                  </label>
                  <span className="p-form__input--select-wrapper">
                    <select
                      className="p-form__input p-form__input--select"
                      name="question_for"
                      value={parsed.for}
                      onChange={this.handleChange}
                      required
                    >
                      <option value="select" defaultValue disabled>
                        Please Select
                      </option>
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
                      <option value="Matthew De Abaitua">
                        Matthew De Abaitua
                      </option>
                      <option value="Alexandra Deschamps-Sonsino">
                        Alexandra Deschamps-Sonsino
                      </option>
                      <option value="Tom Phillips">Tom Phillips</option>
                      <option value="Anna Powell-Smith">
                        Anna Powell-Smith
                      </option>

                      <optgroup label="Survival" />
                      <option value="Survival Panel">Survival Panel</option>
                      <option value="Mary Clear">Mary Clear</option>
                      <option value="Ian Jindal">Ian Jindal</option>
                      <option value="Dominic Sutton">Dominic Sutton</option>
                      <option value="Bethan Vincent">Bethan Vincent</option>
                    </select>
                  </span>
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
                    <span className="p-form__error">
                      Please enter a question
                    </span>
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

          <div className="p-section__footer">
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
        <img
          alt=""
          className="p-questions__bg"
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNjY2cHgiIGhlaWdodD0iNjA2cHgiIHZpZXdCb3g9IjAgMCA2NjYgNjA2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1MS4zICg1NzU0NCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+QXJ0Ym9hcmQ8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iQXJ0Ym9hcmQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDx0ZXh0IGlkPSJXaGVuLWNsaWNrLXNwZWFrZXItYyIgZm9udC1mYW1pbHk9IlN0b2x6bC1SZWd1bGFyLCBTdG9semwiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJub3JtYWwiIGZpbGw9IiMyMTE3NEMiPgogICAgICAgICAgICA8dHNwYW4geD0iNjkiIHk9Ii0yNjQiPldoZW4gY2xpY2sgc3BlYWtlciBjYXJkLCBpdCBjb3VsZCA8L3RzcGFuPgogICAgICAgICAgICA8dHNwYW4geD0iNjkiIHk9Ii0yNDQiPmV4cGFuZCB0byBiZSB0aGUgZmVlZGJhY2s8L3RzcGFuPgogICAgICAgIDwvdGV4dD4KICAgICAgICA8ZyBpZD0iYmctc2hhcGUtMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDY5LjUwMDAwMCwgMjE0LjAwMDAwMCkgc2NhbGUoLTEsIDEpIHJvdGF0ZSgtMTgwLjAwMDAwMCkgdHJhbnNsYXRlKC00NjkuNTAwMDAwLCAtMjE0LjAwMDAwMCkgdHJhbnNsYXRlKDE0MS4wMDAwMDAsIC0xNTcuMDAwMDAwKSIgZmlsbD0iIzE4OTU2RSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPHBhdGggZD0iTTQ5Mi43NTU3NjUsNjQ2LjAxMjQ0MyBDNDQxLjM3NTc2NSw3MTAuMTUyNDQzIDM1Ny40ODU3NjUsNzQ2Ljc2MjQ0MyAyNzUuNTE1NzY1LDc0MC44NjI0NDMgQzI2Mi44OTU3NjUsNzM5Ljk1MjQ0MyAyNTAuMDQ1NzY1LDczOC4wMDI0NDMgMjM4Ljg2NTc2NSw3MzIuMDYyNDQzIEMyMTMuMjQ1NzY1LDcxOC40NTI0NDMgMjAyLjA3NTc2NSw2ODUuNDcyNDQzIDIwNy44NjU3NjUsNjU3LjA2MjQ0MyBDMjEzLjY1NTc2NSw2MjguNjUyNDQzIDIzMy40MjU3NjUsNjA0Ljc1MjQ0MyAyNTYuNDY1NzY1LDU4Ny4xMjI0NDMgQzE4My4zMjA0OTQsNTg5LjA5ODcwNiAxMTEuMzg3ODA1LDU2OC4xNTQ5MDUgNTAuNzM1NzY1NCw1MjcuMjIyNDQzIEMzNS4yOTU3NjU0LDUxNi43NjI0NDMgMjAuMjk1NzY1NCw1MDQuNTMyNDQzIDExLjY2NTc2NTQsNDg4LjAzMjQ0MyBDLTIyLjgwNDIzNDYsNDIyLjM2MjQ0MyAyMy41MTU3NjU0LDMzMy45MjI0NDMgOTIuOTc1NzY1NCwzMTcuODgyNDQzIEMxMTcuOTA1NzY1LDMxMi4xMjI0NDMgMTQzLjgxNTc2NSwzMTIuNjQyNDQzIDE2OS4zOTU3NjUsMzEzLjE4MjQ0MyBDMTM3LjgxNTc2NSwzMTIuNTEyNDQzIDEyMS41NTU3NjUsMjU3LjY1MjQ0MyAxMTcuNzA1NzY1LDIzMy4xMDI0NDMgQzExMS43NzU3NjUsMTk1LjMwMjQ0MyAxMjAuMjE1NzY1LDE1NC4yNjI0NDMgMTQwLjcwNTc2NSwxMjIuMDMyNDQzIEMxNjEuNzA1NzY1LDg5LjEyMjQ0MjkgMTk0LjA1NTc2NSw2My4xOTI0NDI5IDIzMy41MjU3NjUsNTcuOTIyNDQyOSBDMjgxLjI4NTc2NSw1MS41NTI0NDI5IDMyNC4yNzU3NjUsNzguNDMyNDQyOSAzNjAuODU1NzY1LDEwNS45MjI0NDMgQzM3NS4wMDU3NjUsNTMuMTAyNDQyOSA0MjEuOTE1NzY1LDEwLjU3MjQ0MjkgNDc1Ljg1NTc2NSwxLjY2MjQ0Mjg3IEM0ODkuNjE1NzY1LC0wLjYwNzU1NzEyNiA1MDMuODU1NzY1LC0wLjgzNzU1NzEyNiA1MTcuMzQ1NzY1LDIuNzcyNDQyODcgQzU0MC45OTU3NjUsOS4xMTI0NDI4NyA1NjAuMDQ1NzY1LDI2LjU3MjQ0MjkgNTc1LjY2NTc2NSw0NS40MTI0NDI5IEM2MjMuNTQ1NzY1LDEwMy4xMzI0NDMgNjQ3LjYwNTc2NSwxNzcuODUyNDQzIDY1NC4zMTU3NjUsMjUyLjUzMjQ0MyBDNjYyLjUyNTc2NSwzNDMuOTEyNDQzIDY0NS42ODU3NjUsNDM3Ljg3MjQ0MyA2MDMuMzE1NzY1LDUxOS4yMjI0NDMgQzU2MC45NDU3NjUsNjAwLjU3MjQ0MyA0OTIuNjU1NzY1LDY2OC43ODI0NDMgNDA5LjgxNTc2NSw3MDguMjIyNDQzIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="
        />
      </div>
    );
  }
}

export default Questions;
