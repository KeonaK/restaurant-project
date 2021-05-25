import React from "react";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

function Checkout() {
  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="columns is-8 is-variable ">
            <div className="column is-two-thirds has-text-left">
              <h1 className="title is-1">Your Order</h1>
              <Link to="/order"> ← Add more items</Link>

              <p className="is-size-4">
                <CartItem />
              </p>
            </div>
            <div className="column is-one-third has-text-left">
              <div className="control">
                <div>
                  <p>Subtotal (0) $</p>
                  <p>
                    <strong>TOTAL</strong> (0) $
                  </p>
                </div>
                <Link to="/cards">
                  <button
                    type="submit"
                    className="button is-link is-fullwidth has-text-weight-medium is-medium"
                  >
                    Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
