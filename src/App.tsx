import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";
import { SignInButton } from "@clerk/clerk-react";

function App() {
  return (
    <div className="App">
      {/* <Link to="/sign-in">Signin</Link> */}
      <SignInButton />
    </div>
  );
}

export default App;
