import React from "react";
import "./App.css";
import Nav from "../src/components/Nav/index";
import Landing from "../src/pages/Landing";
import Ordering from "../src/pages/Ordering";
import SignUp from "../src/pages/SignUp";
import Login from "../src/pages/Login";
import Checkout from "../src/pages/Checkout";
import NoMatch from "../src/pages/NoMatch";
import Footer from "../src/components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/landing" component={Landing} />
          <Route exact path="/restaurant-project" component={Landing} />
          <Route exact path="/order" component={Ordering} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/checkout" component={Checkout} />
          <Route component={NoMatch} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
