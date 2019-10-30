import React, { Component } from "react";

class Counter extends Component {
  //   constructor() {
  //       super();
  //       this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  styles = {
    fontWeight: "bold",
    fontSize: 10
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag.id}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <React.Fragment>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>

        <br></br>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2";
    classes +=
      this.props.counter.value === 0 ? " badge-warning" : " badge-primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;

    return value === 0 ? <h5>Zero</h5> : <h5>{value}</h5>;
  }
}

export default Counter;
