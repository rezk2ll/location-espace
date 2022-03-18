//importation Schema
const User = require("../model/User");
//importation token
const jwt = require("jsonwebtoken");

const isAuth = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token) {
      res.status(401).send({ errors: [{ msg: "not authorized" }] });
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const foundUser = await User.findOne({ _id: decoded.id });
    if (!foundUser) {
       res.status(401).send({errors:[{msg:"not autorized"}]})
    }
    req.user = foundUser; 
    next();
  } catch (error) {
     res.status(401).send({ errors: [{ msg: "not authorized" }] });
  }
};
module.exports = isAuth;
