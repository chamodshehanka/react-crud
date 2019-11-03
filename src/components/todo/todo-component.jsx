import React, { Component } from 'react';
import AddTodo from './add-todo';

const divStyles = {
  height: '25px'
};

class TodoComponent extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div style={divStyles}></div>

        <AddTodo />
      </React.Fragment>
    );
  }
}

export default TodoComponent;
