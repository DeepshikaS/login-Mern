import React, { Component } from "react";
import "./App.css";
import Navbar from "./layout/Navbar";
import Landing from "./layout/Landing";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Landing />
      </div>
    );
  }
}

export default App;
