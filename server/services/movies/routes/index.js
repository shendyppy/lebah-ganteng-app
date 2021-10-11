const MovieController = require("../controllers/MovieController");
const router = require("express").Router();

router.get("/movies", MovieController.get);
router.get("/movies/:id", MovieController.getByID);
router.post("/movies", MovieController.post);
router.put("/movies/:id", MovieController.put);
router.delete("/movies/:id", MovieController.delete);

module.exports = router;
