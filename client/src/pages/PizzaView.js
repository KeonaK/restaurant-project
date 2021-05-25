import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPizzaDetails } from "../redux/actions/pizzaActions";
import { addToCart } from "../redux/actions/cartActions";

const PizzaView = ({ match, history }) => {
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
    history.push(`/cart`);
  };

  return (
    <div className="pizzascreen">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="pizzascreen__left">
            <div className="left__image">
              <img src={pizza.imageUrl} alt={pizza.name} />
            </div>
            <div className="left__info">
              <p className="left__name">{pizza.type}</p>
              <p>Price: ${pizza.price}</p>
              <p>Toppings: {pizza.toppings}</p>
            </div>
          </div>
          <div className="pizzascreen__right">
            <div className="right__info">
              <p>
                Price:
                <span>${pizza.price}</span>
              </p>

              <p>
                <button type="button" onClick={addToCartHandler}>
                  Add To Cart
                </button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PizzaView;
