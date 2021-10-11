const TVSeriesController = require("../controllers/TVSerialController");
const router = require("express").Router();

router.get("/", TVSeriesController.get);
router.get("/:id", TVSeriesController.getByID);
router.post("/", TVSeriesController.post);
router.put("/:id", TVSeriesController.put);
router.delete("/:id", TVSeriesController.delete);

module.exports = router;
