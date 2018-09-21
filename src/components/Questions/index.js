import React from 'react';

const Questions= () => {
  return (
    <div>
      <h1>Questions</h1>

      <form name="question" method="post">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>Your Name: <input type="text" name="name"/></label>
        </p>
        <p>
          <label>Question: <textarea name="question"></textarea></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  )
}

export default Questions;