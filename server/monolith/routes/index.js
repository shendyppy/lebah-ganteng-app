const tvSeriesRouter = require("./tvserial");
const MoviesRouter = require("./movie");

const router = require("express").Router();

router.use("/tvseries", tvSeriesRouter);
router.use("/movies", MoviesRouter);

module.exports = router;
