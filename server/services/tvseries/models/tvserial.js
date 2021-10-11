const { ObjectId } = require("bson");
const { getDatabase } = require("../config/mongo");

class TVSeries {
  static get() {
    return getDatabase().collection("TVSeries").find().toArray();
  }

  static getByID(id) {
    return getDatabase()
      .collection("TVSeries")
      .findOne({ _id: ObjectId(id) });
  }

  static post(payload) {
    return getDatabase().collection("TVSeries").insertOne(payload);
  }

  static put(id, payload) {
    return getDatabase()
      .collection("TVSeries")
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
      .collection("TVSeries")
      .deleteOne({ _id: ObjectId(id) });
  }
}

module.exports = TVSeries;
