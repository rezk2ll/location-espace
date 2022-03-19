//importation
const express = require("express");
const { signup, signin, deleteUser } = require("../controllers/user");
const isAuth = require("../middleware/isAuthUser");
const { registerValidation, validation, loginValidation, modifyUserValidation } = require("../middleware/validator");

//importation router
const router = express.Router();

//importation annonce Schema
const annonce = require("../model/Annonce");

//importation user Schema
const user=require("../model/User")

//CRUD
/**
 * methode:post
 * path:http://localhost:5000/api/user/add
 * req.body
 */
router.post("/add", async (req, res) => {
  try {
    const {
      annoncementOwner,
      annoncementDescription,
      annoncementPicture,
      
    } = req.body;
    const newAnnonce = new annonce({
      annoncementOwner,
      annoncementDescription,
      annoncementPicture,
      annoncementExpo : new Date()
    });
    await newAnnonce.save();
    return res.status(200).send({ msg: "the annonce added", newAnnonce });
  } catch (error) {
    return res.status(400).send({ msg: "can not add the annonce", error });
  }
});
/**
 * methode:get ALL
 * path:http://localhost:5000/api/user/
 */
router.get("/", async (req, res) => {
  try {
    const annonceList = await annonce.find();
    return res
      .status(200)
      .send({ msg: "this is the list of annonce", annonceList });
  } catch (error) {
    return res.status(400).send({ msg: "can not show the list", error });
  }
});
/**
 * methode:update annonce
 * path:http://localhost:5000/api/user/editAnnonce/:_id
 * req.params && req.body
 */
router.put("/editAnnonce/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const {
      annoncementOwner,
      annoncementDescription,
      annoncementPicture,
      annoncementExpo,
    } = req.body;
    const editAnnonce = await annonce.updateOne(
      { _id },
      { $set: { ...req.body } }
    );
    return res.status(200).send({ msg: "the annonce updated", editAnnonce });
  } catch (error) {
    return res.status(400).send({ msg: "can not update the annonce", error });
  }
});
/**
 * methode:delete annonce
 * path:http://localhost:5000/api/user/deleteAnnonce/:_id
 * req.params
 */
router.delete("/deleteAnnonce/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const deleteAnnonce = await annonce.deleteOne({ _id });
    return res.status(200).send({ msg: "the annonce deleted", deleteAnnonce });
  } catch (error) {
    return res.status(400).send({ msg: "can not deleted annonce", error });
  }
});

/**
 * methode:update user
 * path:http://localhost:5000/api/user/editUser/:_id
 * req.params && req.body
 */
 router.put("/editUser/:_id",isAuth,modifyUserValidation, async (req, res) => {
  try {
    const { _id } = req.params;
    const {name,email,password,adresse,tel} = req.body;
    const editUser = await user.updateOne(
      { _id },{ $set: { ...req.body } }
    );
    return res.status(200).send({ msg: "I ve updated", editUser });
  } catch (error) {
    return res.status(400).send({ msg: "I m not able to update", error });
  }
});

/**
 * methode:delete user
 * path:http://localhost:5000/api/user/deleteUser/:_id
 * req.params
 */
 router.delete("/deleteUser/:_id", isAuth, modifyUserValidation, deleteUser);

//sign up sign in
router.post("/signup",registerValidation(),validation, signup);
router.post("/signin",loginValidation(),validation, signin);
router.get("/current", isAuth, (req, res) => {
  res.send({...req.user,isAdmin:false});
});

module.exports = router;
