import React from "react";
import { Link } from "react-router-dom";
// import { useState } from "react";

function Checkout(props) {
  //reduce takes in accumulator and current item
  const itemsPrice = props.cartItems.reduce((a, b) => a + b.qty * b.price, 0);
  const taxPrice = itemsPrice * 0.0825;
  const totalPrice = itemsPrice + taxPrice;

  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="columns is-8 is-variable ">
            <div className="column checkout__border is-two-thirds has-text-left">
              <h1 className="title is-1">Your Order</h1>
              <Link to="/order"> ← Add more items</Link>
              <div>
                {props.cartItems.map((cartItem) => (
                  <div>
                    <hr></hr>
                    <div>
                      <strong>{cartItem.type}</strong>
                    </div>
                    <div>{cartItem.toppings}</div>
                    <div>{cartItem.size}"</div>
                    <div>${cartItem.price}</div>
                    <hr></hr>
                  </div>
                ))}
              </div>

              <p className="is-size-4"></p>
            </div>
            <div className="column checkout__border  is-one-third has-text-left">
              <div className="control">
                <div>
                  {props.cartItems.map((cartItem) => (
                    <div key={cartItem.id}>
                      <div>
                        <strong>{cartItem.type}</strong>
                      </div>
                      {/* <div>{cartItem.toppings}</div> */}
                      <div>{cartItem.size}"</div>
                      <div>${cartItem.price}</div>
                      <div>
                        {cartItem.qty} x ${cartItem.price.toFixed(2)}
                      </div>

                      <div>
                        <button
                          className="cart"
                          onClick={() => props.removeFromCart(cartItem)}
                        >
                          -
                        </button>{" "}
                        <button
                          className="cart"
                          onClick={() => props.addToCart(cartItem)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                  <hr></hr>
                </div>
                <div>
                  <p>Subtotal ${itemsPrice.toFixed(2)}</p>
                  <p>Tax ${taxPrice.toFixed(2)}</p>
                  <p>
                    <strong>TOTAL</strong> ${totalPrice.toFixed(2)}{" "}
                  </p>
                </div>

                <Link to="/cards">
                  <button type="submit" className=" button checkout__button">
                    <strong>Checkout</strong>
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
