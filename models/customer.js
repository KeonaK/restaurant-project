const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const customerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer