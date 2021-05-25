import React from "react";
import Pizzas from "../components/Pizzas";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPizzaRequest as listPizzas } from "../redux/actions/pizzaActions";

function Ordering() {
  const dispatch = useDispatch();

  const getPizzaRequest = useSelector((state) => state.getPizzaRequest);
  const { pizzas, loading, error } = getPizzaRequest;

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
              <option>12"</option>
              <option>16"</option>
              <option>18"</option>
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

          <div className="subtitle">Chef's Selections</div>
          <div>
            {pizzas.map((pizza) => (
              <Pizzas
                key={pizza._id}
                type={pizza.type}
                toppings={pizza.toppings}
                size={pizza.size}
                gluten={pizza.gluten}
                price={pizza.price}
                pizzaId={pizza._id}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Ordering;
