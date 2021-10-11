const TVSeries = require("../models/tvserial");

class TVSeriesController {
  static async get(req, res, next) {
    try {
      const response = await TVSeries.get();

      res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  }

  static async getByID(req, res, next) {
    try {
      const { id } = req.params;
      const output = await TVSeries.getByID(id);

      res.status(200).json(output);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async post(req, res, next) {
    try {
      const data = {
        title: req.body.title,
        overview: req.body.overview,
        poster_path: req.body.poster_path,
        popularity: +req.body.popularity,
        tags: req.body.tags,
      };
      const output = await TVSeries.post(data);

      res.status(200).json(output);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async put(req, res, next) {
    try {
      const { id } = req.params;
      const data = {
        title: req.body.title,
        overview: req.body.overview,
        poster_path: req.body.poster_path,
        popularity: +req.body.popularity,
        tags: req.body.tags,
      };
      const output = await TVSeries.put(id, data);

      res.status(200).json(output);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      const output = await TVSeries.delete(id);

      res.status(200).json(output);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

module.exports = TVSeriesController;
