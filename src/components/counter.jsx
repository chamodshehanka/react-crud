import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: 10,
    imageUrl:
      "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
  };

  styles = {
    fontWeight: "bold",
    fontSize: 10
  };

  render() {
    // React.createElement("div");
    return (
      <React.Fragment>
        <img src={this.state.imageUrl} alt=""></img>
        <br></br>
        <span style={this.styles} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
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
