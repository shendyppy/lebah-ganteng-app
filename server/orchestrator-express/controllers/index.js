const moviesAPI = require("../apis/moviesAPI");
const tvSeriesAPI = require("../apis/tvSeriesAPI");
const Redis = require("ioredis");
const redis = new Redis();

class Controller {
  static async getAll(req, res, next) {
    try {
      const cache = await redis.get("entertainMe");
      if (!cache) {
        const { data: movies } = await moviesAPI.get("/");
        const { data: tvSeries } = await tvSeriesAPI.get("/");
        const entertainMe = { movies, tvSeries };
        redis.set("entertainMe", JSON.stringify(entertainMe));
        res.status(200).json(entertainMe);
      } else {
        res.status(200).json(JSON.parse(cache));
      }
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
