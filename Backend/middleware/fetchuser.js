var jwt = require("jsonwebtoken");
const JWT_SECRET = "API$withExpressAreFun&XOXO";

const fetchuser = (req, res, next) => {
  // Get user from JWT token and add id to req

  const token = req.header("auth-token");
  console.log("FetchUser: " + token);
  if (!token) {
    res
      .status(401)
      .send({ error: "Please Authenticate using a valid token.FetchUser" });
  }

  try {
    console.log("Here we are.");
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    console.log(req.user);
    next();
  } catch (error) {
    res.status(401).send({ error: "Please Authenticate using a valid token." });
  }
};

module.exports = fetchuser;
