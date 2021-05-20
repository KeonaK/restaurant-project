const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactcms");

const pizzaSeed = [
  {
    type: "Cheese",
    toppings: "Traditional sauce, mozzarella cheese ",
    allergy: "Gluten",
    date: new Date(Date.now()),
  },
  {
    type: "Meat Lover",
    toppings:
      "Traditional sauce, mozzarella cheese, italian sausage, ham, bacon, and pepperoni  ",
    allergy: "Gluten",
    date: new Date(Date.now()),
  },
  {
    type: "Vegan",
    toppings: "Spinach",
    allergy: "Gluten-Free",
    date: new Date(Date.now()),
  },
  {
    type: "The Kirby",
    toppings:
      "White sauce, mozzarella cheese, chicken, minced garlic, basil, and  onions",
    allergy: "Gluten",
    date: new Date(Date.now()),
  },
  {
    type: "The Claytonator",
    toppings:
      "Traditional sauce, fresh mozzarella, sun dried tomatoes, canadian bacon, and black olives",
    allergy: "Gluten",
    date: new Date(Date.now()),
  },
  {
    type: "Pesto Westo",
    toppings:
      "Pesto sauce, goat cheese, spinach, bell peppers, and ground beef",
    allergy: "Gluten",
    date: new Date(Date.now()),
  },
];

db.Post.remove({})
  .then(() => db.Post.collection.insertMany(pizzaSeed))
  .then((data) => {
    console.log(data.result.n + "order inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
