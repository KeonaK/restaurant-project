import React from "react";

import Pizza from "../components/Pizza";

function Ordering(props) {
  return (
    <div>
      <section className="section has-background-danger-dark has-text-white is-medium">
        <div>
          <div className="subtitle has-text-white ">Build your own</div>
          <div className="field is-grouped">
            <div className="select is-normal">
              <select>
                <option>Pizza Size</option>
                <option>12"</option>
                <option>16"</option>
                <option>18"</option>
              </select>
            </div>
            <div className="select is-normal">
              <select>
                <option>Cheese</option>
                <option>Mozzarella</option>
                <option>Goat Cheese</option>
              </select>
            </div>
            <div className="select is-normal">
              <select>
                <option>Dough</option>
                <option>Glutten</option>
                <option>Glutten-Free</option>
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
            <p className="control">
              <button className=" button order__button ">Add</button>
            </p>
          </div>
          <div className="subtitle has-text-white ">
            Chef's Brick Oven Pizzas
          </div>
          <div>
            {props.pizzas.map((pizza) => (
              <Pizza
                key={pizza._id}
                cartItems={props.cartItems}
                setCartItems={props.setCartItems}
                addToCart={props.addToCart}
                pizza={pizza}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Ordering;
