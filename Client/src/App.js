import React from "react";
import "./App.css";
import Nav from "../src/components/Nav/index";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    //   <Route exact path="/login">
    //   <Login />
    // </Route>
    <Nav />
  );
}

export default App;
