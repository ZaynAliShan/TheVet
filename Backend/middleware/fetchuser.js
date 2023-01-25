var jwt = require("jsonwebtoken");
const JWT_SECRET = "API$withExpressAreFun&XOXO";

const fetchuser = (req, res, next) => {
  // Get user from JWT token and add id to req
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "Please Authenticate using a valid token." });
  }

  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    console.log(req.user.id);
    next();
  } catch (error) {
    res.status(401).send({ error: "Please Authenticate using a valid token." });
  }
};

module.exports = fetchuser;