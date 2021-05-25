import React from "react";
<<<<<<< HEAD

function Ordering(props) {
=======
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
>>>>>>> b60edfa9f42b4d90850c4bf5af895fad9ded152a
  return (
    <div>
      <section className="hero is-danger is-fullheight">
        <div className="hero-body">
          <div className="subtitle">Build your own</div>

<<<<<<< HEAD
          <div class="select is-normal">
            <select>
              <option>Pizza Size</option>
              <option>12"</option>
              <option>16"</option>
              <option>18"</option>
=======
          <div className="select is-normal">
            <select>
              <option>Pizza Size</option>
              <option value="12">12"</option>
              <option value="16">16"</option>
              <option value="18">18"</option>
>>>>>>> b60edfa9f42b4d90850c4bf5af895fad9ded152a
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

<<<<<<< HEAD
          <div class="select is-normal">
            <select>
              <option>Cheese</option>
              <option>Mozzarella</option>
              <option>Goat Cheese</option>
            </select>
          </div>
          <div class="select is-normal">
            <select>
              <option>Dough</option>
              <option>Glutten</option>
              <option>Glutten-Free</option>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
              </div>
            </div>
            <footer className="card-footer">
              <a href="#" className="card-footer-item">
                Add
              </a>
            </footer>
          </div>
=======
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
>>>>>>> b60edfa9f42b4d90850c4bf5af895fad9ded152a
        </div>
      </section>
    </div>
  );
}

export default Ordering;
