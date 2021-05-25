const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the customers below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/customerDB", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const customerSeed = [
  {
    name: "Greg Olson",
    cc:"xxx-xxx-xxxx" ,
    exp: "05/23",
    cvc: "xxx",
    
    
    date: new Date(Date.now()),
  },
  {
    name: "Scarlet Johanson",
    cc:"xxx-xxx-xxxx" ,
    exp: "12/31",
    cvc: "xxx",
    date: new Date(Date.now()),
  },
  {
    name: "Deion Sanders",
    cc:"xxx-xxx-xxxx" ,
    exp:"05/25",
    cvc: "xxx",
    date: new Date(Date.now()),
  },
  {
    name: "Don Carlion",
    cc:"xxx-xxx-xxxx" ,
    exp:"11/24",
    cvc: "xxx",

    
    date: new Date(Date.now()),
  },
  {
    name: "Kamala Harris",
    cc:"xxx-xxx-xxxx" ,
    exp:"02/27",
    cvc: "xxx",
    
    date: new Date(Date.now()),
  },
  {
    name: "Jimmy Carter ",
    cc:"xxx-xxx-xxxx" ,
    exp:"09/22",
    cvc: "xxx",
    date: new Date(Date.now()),
  },
];

db.Post.remove({})
  .then(() => db.Post.collection.insertMany(customerSeed))
  .then((data) => {
    console.log(data.result.n + "card inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
