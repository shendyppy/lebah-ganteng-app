const axios = require("axios");

const tvSeriesAPI = axios.create({
  baseURL: "http://184.72.190.45:4002/tvseries",
});

module.exports = tvSeriesAPI;
