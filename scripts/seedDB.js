const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactcms");

const pizzaSeed = [
  {
    type: "Cheese",
    toppings: "plain",
    allergy: "Gluten",
    date: new Date(Date.now())
  },
  {
    type: "Meat Lover",
    toppings: "Meat",
    allergy: "Gluten",
    date: new Date(Date.now())
  },
  {
    type: "Vegan",
    toppings: "Spinach",
    allergy:"Gluten-Free",
    date: new Date(Date.now())
  }
];

db.Post.remove({})
  .then(() => db.Post.collection.insertMany(pizzaSeed))
  .then(data => {
    console.log(data.result.n + "order inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
