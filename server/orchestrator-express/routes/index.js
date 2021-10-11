const tvSeriesRouter = require("./tvserial");
const MoviesRouter = require("./movie");
const Controller = require("../controllers");

const router = require("express").Router();

router.use("/entertainme", Controller.getAll);
router.use("/tvseries", tvSeriesRouter);
router.use("/movies", MoviesRouter);

module.exports = router;
