const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  url: process.env.URL_LOCAL,
  port: process.env.PORT
};