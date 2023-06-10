const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/TheVet";

const connect_to_mongodb = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Mongo Connection Established!")
  } catch (err) {
    console.error(`Error in MongoDB connection: ${err}`);
  }
}

module.exports = connect_to_mongodb;
