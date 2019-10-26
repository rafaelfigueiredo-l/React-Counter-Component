import React, { Component } from 'react';
import { render } from 'react-dom';
import Counter from './Counter';
import './style.css';

class App extends Component {
  state = {

  };

  render() {
    return (
      <div>
        <p>
          Init
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
