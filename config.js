const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  port: process.env.PORT,
  api_key: process.env.API_KEY
};