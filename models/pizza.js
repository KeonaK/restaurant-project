const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pizzaSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Pizza = mongoose.model("Pizza", pizzaSchema);

module.exports = Pizza;
