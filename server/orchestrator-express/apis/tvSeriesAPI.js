const axios = require("axios");

const tvSeriesAPI = axios.create({
  baseURL: "http://localhost:4002/tvseries",
});

module.exports = tvSeriesAPI;
