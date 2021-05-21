import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Route exact path="/login">
    <Login />
  </Route>
  );
}

export default App;
