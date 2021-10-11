const express = require("express");
const errorHandler = require("./middlewares/errorHandler");
const { connect } = require("./config/mongo");
const app = express();
const PORT = 4001;
const router = require("./routes/index");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);
app.use(errorHandler);

connect();

app.listen(PORT, () => {
  console.log(`Listening to the PORT: ${PORT}`);
});
