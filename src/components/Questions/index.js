import React from 'react';


const encode = (data)=> {
  return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", question: ""};
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "question", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));
    
    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, question } = this.state;
    return (
      <div>
        <h1>Questions</h1>

        <form onSubmit={this.handleSubmit}>
          <input type="hidden" name="form-name" value="question" />
          <p>
            <label>Your Name: <input type="text" name="name" value={name} onChange={this.handleChange} /></label>
          </p>
          <p>
            <label>Question: <textarea name="question" value={question} onChange={this.handleChange} /></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    )
  }
}

export default Questions;