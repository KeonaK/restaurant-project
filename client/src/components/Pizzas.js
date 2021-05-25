import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";
import { getPizzaDetails } from "../redux/actions/pizzaActions";

function Pizzas({ type, toppings, size, price, gluten, match, history }) {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const pizzaDetails = useSelector((state) => state.getPizzaDetails);
  const { loading, error, pizza } = pizzaDetails;

  useEffect(() => {
    if (pizza && match.params.id !== pizza._id) {
      dispatch(getPizzaDetails(match.params.id));
    }
  }, [dispatch, match, pizza]);

  const addToCartHandler = () => {
    dispatch(addToCart(pizza._id, qty));
    history.push(`/checkout`);
  };
  return (
    <div>
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">{type}</p>
        </header>
        <div className="card-content">
          <div className="content">
            <p>Size:{size}</p>
            <p>Toppings:{toppings}</p>
            <p>Dough:{gluten}</p>
            <p>${price}</p>
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
          <button className="card-footer-item" onClick={addToCartHandler}>
            ADD
          </button>
        </footer>
      </div>
    </div>
  );
}

export default Pizzas;
