import React from "react";
import { Link } from "react-router-dom";

function Pizzas() {
  return (
    <div>
      <div className="card">
        <header className="card-header">
          <p className="card-header-title"></p>
        </header>
        <div className="card-content">
          <div className="content">
            <p>Size:</p>
            <p>Toppings:</p>
            <p>Dough:</p>
            <p>$</p>
            <p>
              Qty
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </p>
          </div>
        </div>
        <footer className="card-footer">
          <Link to="/checkout" className="card-footer-item">
            Add
          </Link>
        </footer>
      </div>
    </div>
  );
}

export default Pizzas;