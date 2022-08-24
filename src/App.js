import React from "react";
import "./App.css";
import Header from "./components/header/Header.js";
import Body from "./components/body/Body.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
      </div>
    );
  }
}
export default App;
