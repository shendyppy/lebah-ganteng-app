const axios = require("axios");

const moviesAPI = axios.create({
  baseURL: "http://localhost:4001/movies",
});

module.exports = moviesAPI;
