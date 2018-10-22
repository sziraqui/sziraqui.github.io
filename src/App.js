import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Card from "./components/card";
import Footer from "./components/footer";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Card />
        <Footer />
      </div>
    );
  }
}

export default App;
