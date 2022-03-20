const { validationResult, check } = require("express-validator");

//creation of (registerValidation && loginValidation)
exports.registerValidation = () => [
  check("name", "name is required").notEmpty(),
  check("email", "email must be valid").isEmail(),
  check("password", "should be less 6 carcters")
    .isLength({ min: 6 })
    .notEmpty(),
  check("adresse", "adresse is required").notEmpty(),
];
exports.loginValidation = () => [
  check("email", "email must be valid").isEmail(),
  check("password", "should be less 6 carcters")
    .isLength({ min: 6 })
    .notEmpty(),
];

//handling error
exports.validation = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    res.status(200).json({ errors: error.array() });
  }
  return next();
};

/**
 * Checks whether the requested user is the authorized one.
 *
 * @param {Request} req
 * @param {Response} res
 * @param {Middleware} next
 */
exports.modifyUserValidation = async (req, res, next) => {
 
  const _id = req.params._id;
  const userId = req.user._id;
//   console.log("_id",_id)
//   console.log("user._id",userId)
  if (!_id || !userId || _id !== userId.toString()) {
    return res.status(401);
  }

  return next();
};
