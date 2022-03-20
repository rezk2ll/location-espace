//importation Schema
const Admin = require("../model/Admin");
const User = require("../model/User");
const jwt = require("jsonwebtoken");

/**
 * Check if the user is authenticated
 * 
 * @param {Request} req
 * @param {Response} res
 * @param {Middleware} next
 * 
 * @returns {Promise<Response>}
 */
const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token) {
      return res.status(401).send({ errors: [{ msg: "not authorized" }] });
    }

    const _id = decodeJWT(token);
    if (!decoded) {
      return res.status(401).send({ errors: [{ msg: "not authorized" }] });
    }

    const foundAdmin = await Admin.findOne({ _id });
    if (foundAdmin) {
      req.user = foundAdmin;
      req.isAdmin = true;

      return next();
    }

    const foundUser = await User.findOne({ _id });
    if (foundUser) {
      req.user = foundUser;
      req.isAdmin = false;

      return next();
    }

    return res.status(401).send({ errors: [{ msg: "not authorized" }] });
  } catch (error) {
    return res.status(401).send({ errors: [{ msg: "not authorized" }] });
  }
}

/**
 * checks if the requested user is the same as the logged in one
 * 
 * @param {Request} req
 * @param {Response} res
 * 
 * @returns {Promise<Response>} 
 */
const isSameAsConnectedUser = async (req, res) => {
  const { _id } = res.params;
  const { _id: userId } = req.user;

  if (!_id || !userId || _id !== userId.toString()) {
    return res.status(401).send({ errors: [{ msg: "not authorized" }] });
  }

  return next();
}

/**
 * decodes a JWT token
 * 
 * @param {String}    token the user jwt 
 * @returns {String|null}  the user id or null
 */
const decodeJWT = (token) => {
  try {
    const { id } = jwt.verify(token, process.env.SECRET_KEY);

    return id;
  } catch (error) {
    return null;
  }
}

/**
 * checks if the user is an admin
 * 
 * @param {Request} req
 * @param {Response} res
 * 
 * @returns {Promise<Response>}
 */
const isAdmin = async (req, res, next) => {
  return isAuthenticated(req, res, () => {
    if (req.isAdmin) {
      return next();
    }

    return res.status(401).send({ errors: [{ msg: "not authorized" }] });
  })
}

module.exports = {
  isAuthenticated,
  isSameAsConnectedUser,
  isAdmin
};
