const router = require("express").Router();
const pizzaRoutes = require("./pizzas");

// pizza routes
router.use("/pizzas", pizzaRoutes);

module.exports = router;
