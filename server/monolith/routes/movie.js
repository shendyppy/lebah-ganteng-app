const MovieController = require("../controllers/MovieController");
const router = require("express").Router();

router.get("/", MovieController.get);
router.get("/:id", MovieController.getByID);
router.post("/", MovieController.post);
router.put("/:id", MovieController.put);
router.delete("/:id", MovieController.delete);

module.exports = router;
