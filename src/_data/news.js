const axios = require("axios");
require('dotenv').config();

module.exports = async function() {
  try {
    const response = await axios.get(`http://newsapi.org/v2/top-headlines?country=us&apiKey=4649f34cc1eb42a791701beb000ec278&pageSize=5`);
    return response.data;
  } catch (error) {
    console.error(error);
  }

};
