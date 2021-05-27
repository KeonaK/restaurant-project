import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import { Icon } from "@iconify/react";
import shoppingCart from "@iconify/icons-fa-solid/shopping-cart";

function Nav(props) {
  return (
    <nav
      className="navbar is-spaced"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <img src={logo} width="112" height="28" alt="logo" />
        </Link>

        <div
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        {/* <div className="navbar-start">
          <a className="navbar-item">Home</a>

          <a className="navbar-item">Documentation</a>
        </div> */}

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link className="button " to="/login">
                <strong>Log in</strong>
              </Link>
              <Link className="button " to="/sign-up">
                <strong>Create account</strong>
              </Link>
              <Link to="/checkout">
                <span className="icon-text ">
                  <span className="icon">
                    <Icon
                      icon={shoppingCart}
                      style={{ color: "black", fontSize: "30px" }}
                    />
                  </span>
                  <span>
                    {props.cartItems.length ? (
                      <button className="cart">
                        {props.cartItems.reduce(
                          (runningTotal, cartItem) =>
                            runningTotal + cartItem.qty,
                          0
                        )}
                      </button>
                    ) : (
                      ""
                    )}
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
