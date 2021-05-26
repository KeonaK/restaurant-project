import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { Icon } from "@iconify/react";
import shoppingCart from "@iconify/icons-fa-solid/shopping-cart";

function Nav(props) {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <img src={logo} width="112" height="28" alt="logo" />
        </Link>

        {/* <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a> */}
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        {/* <div className="navbar-start">
          <a className="navbar-item">Home</a>

          <a className="navbar-item">Documentation</a>
        </div> */}

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link className="button is-primary" to="/login">
                <strong>My account</strong>
              </Link>
              <Link className="button is-light" to="/sign-up">
                Create account
              </Link>
              <Link to="/checkout">
                <span className="icon-text ">
                  <span className="icon">
                    <Icon
                      icon={shoppingCart}
                      style={{ color: "black", fontSize: "20px" }}
                    />
                  </span>
                  <span>
                    {props.countCartItems ? (
                      <button>{props.countCartItems}</button>
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
