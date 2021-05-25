import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pizzas from "../components/Pizzas";
//renaming get pizza
import { getPizzaRequest as listPizzas } from "../redux/actions/pizzaActions";

function Ordering() {
  const dispatch = useDispatch();
  //get the pizza request from the store
  const getPizzaRequest = useSelector((state) => state.getPizzaRequest);
  //get pizza array
  const { pizzas, loading, error } = getPizzaRequest;
  //when the page loads we wants to make a dispatch to list the pizzas
  useEffect(() => {
    dispatch(listPizzas());
  }, [dispatch]);
  return (
    <div>
      <section className="hero is-danger is-fullheight">
        <div className="hero-body">
          <div className="subtitle">Build your own</div>

          <div className="select is-normal">
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

          <div className="select is-normal">
            <select>
              <option>Cheese</option>
              <option value="mozzarella">Mozzarella</option>
              <option value="goat cheese">Goat Cheese</option>
            </select>
          </div>
          <div className="select is-normal">
            <select>
              <option>Dough</option>
              <option value="gluten">Gluten</option>
              <option value="gluten">Gluten-Free</option>
            </select>
          </div>
          <div className="subtitle">Chef's Selections</div>
          <Pizzas />
        </div>
      </section>
    </div>
  );
}

export default Ordering;
