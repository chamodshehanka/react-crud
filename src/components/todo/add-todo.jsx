import React, { Component } from 'react';

class AddTodo extends Component {
  state = {
    title: ''
  };

  onSubmit = e => {
      e.preventDefault();
      
  };

  render() {
    return (
      <React.Fragment>
        <form action='' onSubmit={this.onSubmit}>
          <div className='form-group'>
            <input
              className='form-control'
              type='text'
              name='title'
              id=''
              placeholder='To Do title'
            />

            <button type='submit' className='btn btn-primary'>
              Add To Do
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default AddTodo;
