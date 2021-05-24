import React from "react";
import "./App.css";
import Nav from "../src/components/Nav/index";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path="/" component={Landing} />
        <Route exact path="/landing" component={Landing} />
        <Route exact path="/restaurant-project" component={Landing} />
        <Route exact path="/order" componenet={Ordering} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/checkout" component={Checkout} />
        <Route component={NoMatch} />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
