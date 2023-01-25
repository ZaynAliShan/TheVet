//1. first we want to connect to our database using mongoose

const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/TheVet"

// make function async and it waits for the promise to resolve wherever we put await

const connect_to_mongodb = () => {
  mongoose.connect(mongoURI, ()=> { // when mongo connects this call back function gets fired
    console.log("Mongo Connection Established!")
  })
}

// now we want to export our this modeule to the index.js where we will perform connection
module.exports = connect_to_mongodb;
