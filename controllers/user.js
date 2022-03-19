//importation Schema
const User = require("../model/User");
//importation bcrypt
const bcrypt = require("bcrypt");
//importation jsonwebtoken
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  try {
    const { name, email, password,adresse,tel } = req.body;
    const foundUser = await User.findOne({ email });
    if (foundUser) {
      return res
        .status(400)
        .send({ errors: [{ msg: "email should be unique" }] });
    }
    //hashage mot de passe with bcrypt
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = new User({ ...req.body });
    newUser.password = hashedPassword;
    await newUser.save();
    //creation of token
    const token = jwt.sign({ id: newUser._id }, process.env.SECRET_KEY, {
      expiresIn: "2h",
    });
    return res
      .status(200)
      .send({ msg: "the user added in data base", user: newUser, token });
  } catch (error) {
    return res.status(400).send({ msg: "cannot added this user in data base" });
  }
};
exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const foundUser = await User.findOne({ email });
    if (!foundUser) {
      return res.status(400).send({ errors: [{ msg: "bad credentiel" }] });
    }
    const foundPassword = await bcrypt.compare(password, foundUser.password);
    if (!foundPassword) {
      return res.status(400).send({ errors: [{ msg: "bad credentiel" }] });
    }
    //creation of token
    const token=jwt.sign({id:foundUser._id},process.env.SECRET_KEY)
    return res.status(200).send({ msg: "login success", user: foundUser,token });
  } catch (error) {
    return res.status(400).send({ msg: "login failed" });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { _id } = req.params;
    // console.log(_id)
    const deleteUser = await User.deleteOne({ _id });
    return res.status(200).send({ msg: "I ve deleted", deleteUser });
  } catch (error) {
    return res.status(400).send({ msg: "I m not able to delete", error });
  }
}
