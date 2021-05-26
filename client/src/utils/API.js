import axios from "axios";

export default {
  // Gets all books
  getPizzas: function () {
    return axios.get("/api/pizzas");
  },
  // Gets the book with the given id
  getPizza: function (id) {
    return axios.get("/api/pizzas/" + id);
  },
  // Deletes the book with the given id
  deletePizza: function (id) {
    return axios.delete("/api/pizzas/" + id);
  },
  // Saves a book to the database
  savePizza: function (pizzaData) {
    return axios.post("/api/pizzas", pizzaData);
  },
};
