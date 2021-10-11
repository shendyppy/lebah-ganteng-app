const { MongoClient } = require("mongodb");
const url =
  "mongodb+srv://test123:test123@cluster0.iv3ak.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const dbName = "EntertaintMe";
const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var db;

function connect(callback) {
  client.connect((err) => {
    if (err) {
      console.log(err, "Error to connect mongodb");
    } else {
      console.log("Success to connect mongodb");
      db = client.db(dbName);
    }
  });
}

function getDatabase() {
  return db;
}

module.exports = {
  connect,
  getDatabase,
};
