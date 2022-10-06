import React, { Component } from "react";
import "./App.css";

export class App extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }

  myclick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div>
        <div className="head">count</div>
        <h1>{this.state.count}</h1>
        <button onClick={this.myclick}>click</button>
      </div>
    );
  }
}

export default App;
