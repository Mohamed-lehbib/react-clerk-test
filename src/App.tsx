import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Link to="/sign-in">Signin</Link>
    </div>
  );
}

export default App;
