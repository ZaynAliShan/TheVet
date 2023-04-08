// let's write our authentication route
const express = require("express");
const router = express.Router();
// create and instance of model
const Users = require("../models/Users");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
var fetchuser = require("../middleware/fetchuser");

// Secret to sign
const JWT_Secret = "API$withExpressAreFun&XOXO";

// for validation we use express validator after installing it
const { body, validationResult } = require("express-validator");
// const { request } = require("express");

// let's post a user into our mongo db (Creating a user) No login Required
// resultant endpoint for create user will be "/api/auth/signup"
// ROUTE 1 : Create User on endpoint POST: /api/auth/createuser . with unique email validations
router.post(
  "/signup",
  [
    body("name", "Please Enter a valid name").isLength({ min: 3 }),
    body("email", "Please Enter a valid Email!!!").isEmail(),
    body("password", "Password must be of 5 Characters.").isLength({ min: 5 }),
  ],
  async (req, res) => {
    let success = false;
    // Email Validayion for uniqueness
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }

    try {
      let user = await Users.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({
          success,
          error: "Sorry a user with this email  already exists",
        });
      }

      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      // creating a new User
      user = await Users.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      });

      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_Secret);
      console.log(authToken);
      //res.json(user);
      success = true;
      res.json({ success, authToken });
    } catch (error) {
      console.log(error);
      res.status(500).send("Some Error Has Occured");
    }
  }
);

// ROUTE 2 : Authenticating User with POST: /api/auth/login with validation
router.post(
  "/login",
  [
    body("email", "Please Enter a Valid Email!!!").isEmail(),
    body("password", "Password cannot be empty.").exists(),
  ],
  async (req, res) => {
    // let success = false;
    // Validaion for valid fields
    let error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ error: error.array() });
    }

    const { email, password } = req.body;
    try {
      const user = await Users.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({ error: "Please use correct credentials!!!" });
      }

      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res
          .status(400)
          .json({ error: "Please use correct credentials!!!" });
      }

      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_Secret);
      res.json({ authToken });
    } catch (error) {
      console.error(error);
      return res.status(500).send("Internal Server Error!!!");
    }
  }
);

// ROUTE 3 : Get Logged in user Details with POST: /api/auth/getuser loginRequired
router.post("/getuser", fetchuser, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await Users.findById(userId).select("-password"); // this line of code will get all the details and will leave password field alone (will not fetch password)

    res.send(user);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error!!!");
  }
});

// now let's allow our router to be exported from here
module.exports = router;

// will use express validator to validate our data
// for hash, salt, pepper do: npm i bcryptjs

// There are many tokens to assigns to a user: Sessions etc But we use JWT authentication (to verify a user)

// JWT is used for stateless authentication mechanisms for users and providers, this means maintaining session is on the client-side instead of storing sessions on the server.

// --> After username and pass we authenticate user and then we give a token to user, and the next time if some protected route on our website or server is hit (accessed) then that token will be given too so that we can assess/verify that it was the same user we authenticated previosuly

// 3 parts of an ENCODED JWT token
// RED - Header: Algorithm +  Token Type
// PINK - Payload: Data
// SkyBlue - Signature (Important)

// When we dispatch a JSON web token from our server then we sign it with out secret.
// We verify Data(Pink Part) on the basis of our signed secret -- we check rather someone changed the token or not (For Security Reasons)

// Overall Picture -- JWT gives us secure communication between client and server

// Middleware - file:
// Auth token has user id
// Middleware takes auth token and verifies user
