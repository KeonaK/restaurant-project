import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import trashSharp from "@iconify/icons-ion/trash-sharp";

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
  return (
    <div>
      <Link to="/order">
        <p>name</p>
      </Link>
      <p>$</p>
      <select
        onChange={(event) => qtyChangeHandler(item.product, event.target.value)}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>
      <button onClick={() => removeHandler(item.product)}>
        <Icon icon={trashSharp} style={{ color: "black", fontSize: "10px" }} />
      </button>
    </div>
  );
};

export default CartItem;
