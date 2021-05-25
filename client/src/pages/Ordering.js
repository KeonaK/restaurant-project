import React from "react";
import { Link } from "react-router-dom";

function Ordering(props) {
  return (
    <div>
      <section className="hero is-danger is-fullheight">
        <div className="hero-body">
          <div className="subtitle">Build your own</div>

          <div class="select is-normal">
            <select>
              <option>Pizza Size</option>
              <option value="12">12"</option>
              <option value="16">16"</option>
              <option value="18">18"</option>
            </select>
          </div>
          <h4>Toppings</h4>
          <label className="checkbox">
            <input type="checkbox" />
            Italian Sausage
          </label>
          <label className="checkbox">
            <input type="checkbox" />
            Bacon
          </label>
          <label className="checkbox">
            <input type="checkbox" />
            Pepperoni
          </label>
          <label className="checkbox">
            <input type="checkbox" />
            Ham
          </label>
          <label className="checkbox">
            <input type="checkbox" />
            Chicken
          </label>
          <label className="checkbox">
            <input type="checkbox" />
            Canadian Bacon
          </label>
          <label className="checkbox">
            <input type="checkbox" />
            Spinach
          </label>
          <label className="checkbox">
            <input type="checkbox" />
            Basil
          </label>
          <label className="checkbox">
            <input type="checkbox" />
            Onions
          </label>
          <label className="checkbox">
            <input type="checkbox" />
            Minced Garlic
          </label>
          <label className="checkbox">
            <input type="checkbox" />
            Sun dried tomatoes
          </label>
          <label className="checkbox">
            <input type="checkbox" />
            Black Olvives
          </label>
          <label className="checkbox">
            <input type="checkbox" />
            Bell Peppers
          </label>
          <label className="checkbox">
            <input type="checkbox" />
            Ground Beef
          </label>

          <div class="select is-normal">
            <select>
              <option>Cheese</option>
              <option value="mozzarella">Mozzarella</option>
              <option value="goat cheese">Goat Cheese</option>
            </select>
          </div>
          <div class="select is-normal">
            <select>
              <option>Dough</option>
              <option value="gluten">Gluten</option>
              <option value="gluten">Gluten-Free</option>
            </select>
          </div>

          <div className="subtitle">Chef's Selections</div>
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">{props.type}</p>
              <button className="card-header-icon" aria-label="more options">
                <span className="icon">
                  <i className="fas fa-angle-down" aria-hidden="true" />
                </span>
              </button>
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
      </section>
    </div>
  );
}

export default Ordering;
