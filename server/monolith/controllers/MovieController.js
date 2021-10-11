const Movie = require("../models/movie");

class MovieController {
  static async get(req, res, next) {
    try {
      const output = await Movie.get();

      res.status(200).json(output);
    } catch (err) {
      next(err);
    }
  }

  static async getByID(req, res, next) {
    try {
      const { id } = req.params;
      const output = await Movie.getByID(id);

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
      const output = await Movie.post(data);

      res.status(201).json(output);
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
      const output = await Movie.put(id, data);

      res.status(200).json(output);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      const output = await Movie.delete(id);

      res.status(200).json(output);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

module.exports = MovieController;
