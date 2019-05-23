const mongoose = require('mongoose');

/**
 * Define MongoDB schema 
 */
const cat = new mongoose.Schema({
    color : String,
    dateFound : {
      type: String,
      default : Date.now
    },
    location : {
      long: Number,
      lat: Number,
    },
    breed : String,
    size : String
  });
  
module.exports = mongoose.model('Cat', cat);