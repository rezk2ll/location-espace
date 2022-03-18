//importation Schema
const Admin = require("../model/Admin");
const jwt = require("jsonwebtoken");

const isAuth = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token) {
      res.status(401).send({ errors: [{ msg: "not authorized" }] });
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const foundAdmin = await Admin.findOne({ _id: decoded.id });
    if (!foundAdmin) {
      res.status(401).send({ errors: [{ msg: "not autorized" }] });
    }
    req.admin = foundAdmin;
    next();
  } catch (error) {
    res.status(401).send({ errors: [{ msg: "not authorized" }] });
  }
};
module.exports = isAuth;
