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

      res.status(201).json({
        _id: output.insertedId,
        title: data.title,
        overview: data.overview,
        poster_path: data.poster_path,
        popularity: data.popularity,
        tags: data.tags,
      });
    } catch (err) {
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

      if (output.matchedCount === 0) {
        throw {
          name: `CustomError`,
          status: 404,
          message: `Not Found`,
        };
      }

      res.status(200).json({
        _id: id,
        title: data.title,
        overview: data.overview,
        poster_path: data.poster_path,
        popularity: data.popularity,
        tags: data.tags,
      });
    } catch (err) {
      next(err);
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      const output = await Movie.delete(id);

      if (output.deletedCount === 0) {
        throw {
          name: `CustomError`,
          status: 404,
          message: `Not Found`,
        };
      }

      res
        .status(200)
        .json({ message: `You have been successfully deleted a movie data` });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

module.exports = MovieController;
