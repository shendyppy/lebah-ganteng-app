const TVSeriesController = require("../controllers/TVSerialController");
const router = require("express").Router();

router.get("/tvseries", TVSeriesController.get);
router.get("/tvseries/:id", TVSeriesController.getByID);
router.post("/tvseries", TVSeriesController.post);
router.put("/tvseries/:id", TVSeriesController.put);
router.delete("/tvseries/:id", TVSeriesController.delete);

module.exports = router;
