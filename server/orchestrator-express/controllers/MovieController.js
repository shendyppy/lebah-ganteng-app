const moviesAPI = require("../apis/moviesAPI");
const Redis = require("ioredis");
const redis = new Redis();

class MovieController {
  static async get(req, res, next) {
    try {
      const cache = await redis.get("movies");
      if (!cache) {
        const response = await moviesAPI.get("/");
        redis.set("movies", JSON.stringify(response.data));
        res.status(200).json(response.data);
      } else {
        res.status(200).json(JSON.parse(cache));
      }
    } catch (err) {
      next(err);
    }
  }

  static async getByID(req, res, next) {
    try {
      const { id } = req.params;
      const response = await moviesAPI.get(`/${id}`);

      if (response.data === null) {
        throw {
          name: `CustomError`,
          status: 404,
          message: `Not Found`,
        };
      }

      res.status(200).json(response.data);
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
      const response = await moviesAPI.post(`/`, data);

      redis.del("movies");
      redis.del("entertainMe");

      res.status(201).json({ _id: response.data.insertedId, data });
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
      const response = await moviesAPI.put(`/${id}`, data);

      redis.del("movies");
      redis.del("entertainMe");

      if (response.data.matchedCount === 0) {
        throw {
          name: `CustomError`,
          status: 404,
          message: `Not Found`,
        };
      }
      res.status(200).json({ _id: response.data.insertedId, data });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      const response = await moviesAPI.delete(`/${id}`);

      redis.del("movies");
      redis.del("entertainMe");

      if (response.data.deletedCount === 0) {
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
