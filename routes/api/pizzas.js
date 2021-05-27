const router = require("express").Router();
const pizzasController = require("../../controllers/pizzasController");


// Matches with "/api/pizzas"
router.route("/").get(pizzasController.findAll).post(pizzasController.create);

// Matches with "/api/pizzas/:id"
router
  .route("/:id")
  .get(pizzasController.findById)
  .put(pizzasController.update)
  .delete(pizzasController.remove);

module.exports = router;
