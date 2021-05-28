import React, { useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/Nav/index";
import Landing from "./pages/Landing";
import Ordering from "./pages/Ordering";
import SignUp from "./pages/SignUp";
import Checkout from "./pages/Checkout";
import NoMatch from "./pages/NoMatch";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import Login from "./pages/Login";
import { Provider } from "react-redux";
import store from "./store";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from "./utils/API";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [pizzas, setPizzas] = useState([]);
  const [token, setToken] = useState("");

  useEffect(() => {
    loadPizzas();
  }, []);

  function loadPizzas() {
    API.getPizzas()
      .then((res) => setPizzas(res.data))
      .catch((err) => console.log(err));
  }

  const addToCart = (pizza) => {
    console.log(cartItems, pizza);
    const pizzaInCart = cartItems.find((x) => x._id === pizza._id);
    console.log(pizzaInCart);
    if (pizzaInCart) {
      setCartItems(
        //increase the qty
        cartItems.map((x) =>
          x._id === pizza._id ? { ...pizzaInCart, qty: pizzaInCart.qty + 1 } : x
        )
      );
    } else {
      //add to cart
      setCartItems([...cartItems, { ...pizza, qty: 1 }]);
    }
  };

  const removeFromCart = (pizza) => {
    const pizzaInCart = cartItems.find((x) => x._id === pizza._id);
    if (pizzaInCart.qty === 1) {
      setCartItems(cartItems.filter((x) => x._id !== pizza._id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x._id === pizza._id ? { ...pizzaInCart, qty: pizzaInCart.qty - 1 } : x
        )
      );
    }
  };
  let test;
  if (token) {
    test = (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/landing" component={Landing} />
        <Route exact path="/restaurant-project" component={Landing} />
        <Route exact path="/order">
          <Ordering
            cartItems={cartItems}
            setCartItems={setCartItems}
            pizzas={pizzas}
            setPizzas={setPizzas}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        </Route>
        <Route exact path="/register">
          {" "}
          <SignUp setToken={setToken} />
        </Route>
        <Route exact path="/login">
          {" "}
          <Login setToken={setToken} />
        </Route>

        <Route exact path="/cards" component={Cards} />
        <Route exact path="/checkout">
          <Checkout
            cartItems={cartItems}
            setCartItems={setCartItems}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        </Route>
        <Route component={NoMatch} />
      </Switch>
    );
  } else {
    test = (
      <Switch>
        <Route exact path="/register">
          <SignUp setToken={setToken}></SignUp>
        </Route>
        <Route exact path="/login">
          <Login setToken={setToken}></Login>
        </Route>
        <Route exact path="/landing">
          <Landing setToken={setToken}></Landing>
        </Route>
        <Route exact path="/">
          <Landing setToken={setToken}></Landing>
        </Route>
      </Switch>
    );
  }
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Nav cartItems={cartItems} setCartItems={setCartItems} />
          {test}

          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
