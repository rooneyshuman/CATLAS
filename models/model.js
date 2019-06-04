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
      lat: Number,
      long: Number,
    },
    breed : String,
    rating : Number,
    size : String
  });
  
module.exports = mongoose.model('Cat', cat);