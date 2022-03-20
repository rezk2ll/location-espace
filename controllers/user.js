const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../model/User");

/**
 * Deletes a user
 *
 * @param {Request} req 
 * @param {Response} res
 * 
 * @returns {Promise<Response>}
 */
const del = async (req, res) => {
  const { _id } = req.params;

  try {
    const deletedUser = await user.deleteOne({ _id });

    return res.status(200).send({ msg: "user deleted", deletedUser });
  } catch (error) {
    return res.status(400).send({ msg: "can not delete the user", error });
  }
}

/**
 * Lists all users
 * 
 * @param {Request} _
 * @param {Response} res
 * 
 * @returns {Promise<Response>}
 */
const list = async (_, res) => {
  try {
    const users = await user.find();

    return res.status(200).send({ users });
  } catch (error) {
    return res.status(400).send({ msg: "failed to list users", error });
  }
}

/**
 * Updates a user
 * 
 * @param {Request} req
 * @param {Response} res
 * 
 * @returns {Promise<Response>}
 */
const update = async (req, res) => {
  const { _id } = req.params;

  try {
    const updatedUser = await user.updateOne({ _id }, { ...req.body });

    return res.status(200).send({ user: updatedUser });
  } catch (error) {
    return res.status(400).send({ msg: "failed to update the user", error });
  }
}

/**
 * creates a user
 * 
 * @param {Request} req
 * @param {Response} res
 * 
 * @returns {Promise<Response>}
 */
const create = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const foundUser = await user.findOne({ email });

    if (foundUser) {
      return res
        .status(400)
        .send({ errors: [{ msg: "email should be unique" }] });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const createdUser = new User({ ...req.body, password: hashedPassword });
    await createdUser.save();

    const token = jwt.sign({ id: createdUser._id }, process.env.SECRET_KEY, {
      expiresIn: "2h",
    })

    return res.status(200).send({user: createdUser, token });
  }
  catch(error){
    return res.status(400).send({ msg: "failed to create the user", error });
  }
}

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const foundUser = await user.findOne({ email });

    if (!foundUser) {
      return res.status(400).send({ errors: [{ msg: "bad credentials" }] });
    }

    const foundPassword = await bcrypt.compare(password, foundUser.password);

    if (!foundPassword) {
      return res.status(400).send({ errors: [{ msg: "bad credentials" }] });
    }

    const token = jwt.sign({ id: foundUser._id }, process.env.SECRET_KEY, {
      expiresIn: "2h",
    })

    return res.status(200).send({ user: foundUser, token });
  }
  catch(error){
    return res.status(400).send({ msg: "failed to login", error });
  }
}

/**
 * Get currently connected user
 */
const getCurrentUser = async (req, res) => {
  return res.status(200).send({ ...req.user, isAdmin: req.isAdmin });
}

module.exports = {
  del,
  list,
  update,
  create,
  login,
  getCurrentUser
}
