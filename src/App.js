import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      string: "Navin"
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.string} is editing this App</p>
          <button onClick={() => this.setState({ string: "Navi" })}>
            Dont like Navin - Click Me
          </button>
        </header>
      </div>
    );
  }
}

export default App;
