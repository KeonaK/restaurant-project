import React, { useState, useEffect } from "react";
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
import API from "./utils/API";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    loadPizzas();
  }, []);

  function loadPizzas() {
    API.getPizzas()
      .then((res) => setPizzas(res.data))
      .catch((err) => console.log(err));
  }

  const addToCart = (pizza) => {
    const pizzaInCart = cartItems.find((x) => x.id === pizza.id);
    if (pizzaInCart) {
      setCartItems(
        //increase the qty
        cartItems.map((x) =>
          x.id === pizza.id ? { ...pizzaInCart, qty: pizzaInCart.qty + 1 } : x
        )
      );
    } else {
      //add to cart
      setCartItems([...cartItems, { ...pizza, qty: 1 }]);
    }
  };

  return (
    <Provider store={store}>
    <Router>
      <div>
        <Nav
          cartItems={cartItems}
          setCartItems={setCartItems}
          countCartItems={cartItems.length}
        />
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
            />
          </Route>
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/cards" component={Cards} />
          {/* <Route exact path="/checkout" component={Checkout} /> */}
          <Route exact path="/checkout">
            <Checkout
              cartItems={cartItems}
              setCartItems={setCartItems}
              addToCart={addToCart}
            />
          </Route>
          <Route component={NoMatch} />
        </Switch>

        <Footer />
      </div>
    </Router>
   </Provider>
  );
}

export default App;
