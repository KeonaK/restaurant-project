const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pizzaSchema = new Schema({
  _id: { type: String, required: true },
  type: { type: String, required: true },
  toppings: { type: String, required: true },
  size: { type: Number, required: true },
  price: { type: Number, required: true },
  gluten: { type: Boolean },
  date: { type: Date, default: Date.now },
});

const Pizza = mongoose.model("Pizza", pizzaSchema);

module.exports = Pizza;
