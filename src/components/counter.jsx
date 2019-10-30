import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: this.props.value,
    imageUrl:
      "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
    tags: ["tag1", "tag2", "tag3"]
  };

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

  handleIncrement = product => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  doHandleIncrement = () => {
    this.handleIncrement({ id: 1 });
  };

  render() {
    return (
      <React.Fragment>
        {this.props.id}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncrement(this.product)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <br></br>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2";
    classes += this.state.counter === 0 ? " badge-warning" : " badge-primary";
    return classes;
  }

  formatCount() {
    return this.state.counter === 0 ? (
      <h5>Zero</h5>
    ) : (
      <h5>{this.state.counter}</h5>
    );
  }
}

export default Counter;
