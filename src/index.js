import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<p>Are you persuaded that HTML-Render does work? I hope so!</p>, document.getElementById('first'));
ReactDOM.render(<p>As you see, we have added the following sentence and it's shown in the browser :)</p>, document.getElementById('second'));

const element = (
  <div>
  <h3>Now, let's make up some dialogue</h3>
    <p>
      <u><strong>Igor</strong></u>: 
      Hello, what's your name?
    </p>
    <p>
      <em><strong>Beautiful girl</strong></em>: 
      Kate! And yours?
    </p>
    <p>
      <u><strong>Igor</strong></u>: 
      My name is Igor. What are you up to today? Maybe coffee cup together?
    </p>
    <p>
      <em><strong>Beautiful girl</strong></em>: 
      I wish I could, but I will be studying in the library.
    </p>
  </div>
);
ReactDOM.render(element, document.getElementById('third'));