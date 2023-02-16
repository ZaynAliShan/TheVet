// entry point for backend
//1. first we want to connect to our database using mongoose - refer to db.js

//================================================================
// import connect_to_mongodb
const connect_to_mongodb = require("./db");

connect_to_mongodb();
// establish connection to express server
const express = require("express");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT"],
  })
);

// Curb Cores Error by adding a header here
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

const port = 5000;

app.use(express.json());
// Available Routes (getting routes from routes folder)
app.use("/api/auth", require("./routes/auth"));

app.listen(port, () => {
  console.log(`Your app listening on port ${port}`);
  console.log(`Your app running on port http://localhost:${port}`);
});

// first we made models and now we use them in routes
// FOR user login we gonna use JWT authentication
// so much node modeules.. we will place it in gitignore
