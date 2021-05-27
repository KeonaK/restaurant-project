const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the pizzas below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/pizzaDB", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const pizzaSeed = [
  {
    type: "Cheese",
    toppings: "Traditional sauce, mozzarella cheese ",
    size: 12,
    price: 8,
    gluten: true,
    date: new Date(Date.now()),
  },
  {
    type: "Meat Lover",
    toppings:
      "Traditional sauce, mozzarella cheese, italian sausage, ham, bacon, and pepperoni  ",
    size: 12,
    price: 10,
    gluten: true,
    date: new Date(Date.now()),
  },
  {
    type: "Vegan",
    toppings: "Spinach",
    size: 12,
    price: 20,
    gluten: false,
    date: new Date(Date.now()),
  },
  {
    type: "The Kirby",
    toppings:
      "White sauce, mozzarella cheese, chicken, minced garlic, basil, and  onions",
    size: 12,
    price: 10,
    gluten: true,
    date: new Date(Date.now()),
  },
  {
    type: "The Claytonator",
    toppings:
      "Traditional sauce, fresh mozzarella, sun dried tomatoes, canadian bacon, and black olives",
    size: 12,
    price: 20,
    gluten: true,
    date: new Date(Date.now()),
  },
  {
    type: "Pesto Westo",
    toppings:
      "Pesto sauce, goat cheese, spinach, bell peppers, and ground beef",
    size: 12,
    price: 12,
    gluten: true,
    date: new Date(Date.now()),
  },
];

db.Pizza.remove({})
  .then(() => db.Pizza.collection.insertMany(pizzaSeed))
  .then((data) => {
    console.log(data.result.n + "order inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
