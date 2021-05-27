const mongoose = require("mongoose");
const db = require("../models");


// This file empties the Posts collection and inserts the customers below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/pizzaDB", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const customerSeed = [
  {
    name: "Greg Olson",
    email: "golson@gmail.com",
    password: "abc12345",
    
    date: new Date(Date.now()),
  },
  // {
  //   name: "Scarlet Johanson",
  //   email: "golson@gmail.com",
  //   exp: "12/31",
  //   cvc: "xxx",
  //   date: new Date(Date.now()),
  // },
  // {
  //   name: "Deion Sanders",
  //   email: "golson@gmail.com",
  //   exp:"05/25",
  //   cvc: "xxx",
  //   date: new Date(Date.now()),
  // },
  // {
  //   name: "Don Carlion",
  //   email: "golson@gmail.com",
  //   exp:"11/24",
  //   cvc: "xxx",

    
  //   date: new Date(Date.now()),
  // },
  // {
  //   name: "Kamala Harris",
  //   email: "kamala@gmail.com",
   
    
  //   date: new Date(Date.now()),
  // },
  // {
  //   name: "Jimmy Carter ",
  //   email: "golson@gmail.com",
    
  //   date: new Date(Date.now()),
  // },
];

db.Customer.remove({})
  .then(() => db.Customer.collection.insertMany(customerSeed))
  .then((data) => {
    console.log(data.result.n + "card inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
