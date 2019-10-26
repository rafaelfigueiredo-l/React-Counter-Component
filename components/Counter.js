import React from 'react';
import CounterButtons from './CounterButtons';

export default class Counter extends React.Component {
  state = {
    count: 0,
  }

  increaseCounter = () => {
   this.setState((prevState) => {
     return {count: prevState.count + 1};
    })
  }

  decreaseCounter = () => {
   this.setState((prevState) => {
     return {count: prevState.count - 1};
    })
  }
  
  resetCounter = () => {
   this.setState(() => {
     return {count: 0};
    })
  }


  render() {
    const {increaseCounter, decreaseCounter, resetCounter } = this;
    const {count} = this.state;
    return (
      <div>
        <h2>Counter: {count}</h2>
        <CounterButtons
         increaseCounter={increaseCounter}
         decreaseCounter={decreaseCounter}
         resetCounter={resetCounter}
         />
      </div>
    );
  }
}