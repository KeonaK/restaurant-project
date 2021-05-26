import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";

export function Pizza({ addToCart, pizza }) {
  return (
    <div>
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">{pizza.type}</p>
        </header>
        <div className="card-content">
          <div className="content">
            <p>Size:{pizza.size}</p>
            <p>Toppings:{pizza.toppings}</p>
            <p>Dough:{pizza.gluten}</p>
            <p>${pizza.price}</p>
          </div>
        </div>
        <footer className="card-footer">
          <Link to="/checkout">
            <button
              onClick={() => addToCart(pizza)}
              className="button is-primary"
            >
              ADD
            </button>
          </Link>
        </footer>
      </div>
    </div>
  );
}

export default Pizza;
