import React, { Component } from "react"; // imrc
import Counter from "./counter";

class Counters extends Component {
  // cc
  state = {};
  render() {
    return (
      <div>
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
    );
  }
}

export default Counters;
