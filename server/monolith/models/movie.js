const { ObjectId } = require("bson");
const { getDatabase } = require("../config/mongo");

class Movie {
  static get() {
    return getDatabase().collection("Movies").find().toArray();
  }

  static getByID(id) {
    return getDatabase()
      .collection("Movies")
      .findOne({ _id: ObjectId(id) });
  }

  static post(payload) {
    return getDatabase().collection("Movies").insertOne(payload);
  }

  static put(id, payload) {
    return getDatabase()
      .collection("Movies")
      .updateOne(
        { _id: ObjectId(id) },
        {
          $set: {
            title: payload.title,
            overview: payload.overview,
            poster_path: payload.poster_path,
            popularity: +payload.popularity,
            tags: payload.tags,
          },
        }
      );
  }

  static delete(id) {
    return getDatabase()
      .collection("Movies")
      .deleteOne({ _id: ObjectId(id) });
  }
}

module.exports = Movie;
