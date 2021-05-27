const router = require("express").Router();
const pizzaRoutes = require("./pizzas");
const userRoutes = require("./users")

// pizza routes
router.use("/pizzas", pizzaRoutes);
router.use("/users", userRoutes);



module.exports = router;
