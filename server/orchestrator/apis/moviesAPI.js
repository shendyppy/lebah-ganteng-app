const axios = require("axios");

const moviesAPI = axios.create({
  baseURL: "http://3.85.50.221:4001/movies",
});

module.exports = moviesAPI;
