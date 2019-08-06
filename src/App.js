import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      mosters: [
        { name: "Frankenstein", id: 1 },
        { name: "Dracula", id: 2 },
        { name: "Zombie", id: 3 }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.mosters.map(moster => {
          return <h1 key={moster.id}>{moster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
