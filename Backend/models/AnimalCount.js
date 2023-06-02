// schema for our Patient table

const mongoose = require('mongoose');

const { Schema } = mongoose

const AnimalCountSchema = new Schema({
  animalType: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    default: 0,
  },
  
 
});

const AnimalCount = mongoose.model('AnimalCount', AnimalCountSchema);

module.exports =  AnimalCount;
