import React, { Component } from "react";

export default class MyClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("1️⃣ Constructor: Initial Setup");
  }
  componentDidMount() {
    console.log("3️⃣ compDidMount: component added to DOM first time");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("4️⃣ ComponentDidUpdate: State/Props change", prevState);
  }
  componentWillUnmount() {
    console.log("5️⃣ componentWillUnmount: Component removed from DOM");
  }
  render() {
    console.log("'2️⃣ render: UI render");
    return (
      <div>
        <h2>count: {this.state.count}</h2>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Add by 1
        </button>
      </div>
    );
  }
}
