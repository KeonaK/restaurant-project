import React from "react";
import "./App.css";
import Nav from "./components/Nav/index";
import Landing from "./pages/Landing";
import Ordering from "./pages/Ordering";
import SignUp from "./pages/SignUp";

import Checkout from "./pages/Checkout";
import NoMatch from "./pages/NoMatch";
import Footer from "./components/Footer";
import Cards from "./components/Cards"
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
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
          <Route exact path="/register" component={Register} />
          <Route exact path="/cards" component={Cards} />
          {/* <Route exact path="/checkout" component={Checkout} /> */}
          <Route exact path="/checkout" component={Checkout} />
          <Route component={NoMatch} />
        </Switch>

        <Footer />
      </div>
    </Router>
   </Provider>
  );
}

export default App;
