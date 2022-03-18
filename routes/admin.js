//importation
const express = require("express");
const { signup, signin } = require("../controllers/admin");
const isAuth = require("../middleware/isAuth");
const { registerValidation, validation, loginValidation } = require("../middleware/validator");

//importation router
const router = express.Router();

//importation user schema
const user=require("../model/User")

//importation annonce Schema
const annonce=require("../model/Annonce")

//CRUDS
/**
 * methode:post
 * path:http://localhost:5000/api/admin/add
 * req.body
 */
router.post("/add",async(req,res)=>{
    try {
     const {name,email,password,adresse,tel}=req.body
     const newUser=new user({
        name,
        email,
        password,
        adresse,
        tel,
      })
      await newUser.save()
      return res.status(200).send({ msg: "the user added", newUser})
    } catch (error) {
      return res.status(400).send({ msg: "can not add the user", error })
    }
})
/**
 * methode:get ALL
 * path:http://localhost:5000/api/admin/
 */
router.get("/",async(req,res)=>{
    try {
        const userList = await user.find();
        return res.status(200).send({ msg: "this is the list of user", userList });
      } catch (error) {
        return res.status(400).send({ msg: "can not show the list", error });
      }
})
/**
 * methode:update
 * path:http://localhost:5000/api/admin/editUser/:_id
 * req.params && req.body
 */
 router.put("/editUser/:_id",async(req,res)=>{
    try {
      const {_id}=req.params
      const {name,email,password,adresse,tel}=req.body
      const editUser=await user.updateOne({_id},{$set:{...req.body}})
      return res.status(200).send({msg:"the user updated",editUser})
    } catch (error) {
      return res.status(400).send({msg:"can not update the user",error})  
    }
  })
  /**
   * methode:delete user
   * path:http://localhost:5000/api/admin/deleteUser/:_id
   * req.params
   */
  router.delete("/deleteUser/:_id",async(req,res)=>{
      try {
        const {_id}=req.params
        const deleteUser=await user.deleteOne({_id})  
        return res.status(200).send({msg:"the user deleted",deleteUser})
      } catch (error) {
         return res.status(400).send({msg:"can not deleted user",error}) 
      }
  })
  /**
   * methode:delete annonce
   * path:http://localhost:5000/api/admin/deleteAnnonce/:_id
   * req.params
   */
   router.delete("/deleteAnnonce/:_id",async(req,res)=>{
    try {
      const {_id}=req.params
      const deleteAnnonce=await annonce.deleteOne({_id})  
      return res.status(200).send({msg:"the annonce deleted",deleteAnnonce})
    } catch (error) {
       return res.status(400).send({msg:"can not deleted annonce",error}) 
    }
})





router.post("/signup",registerValidation(),validation, signup);
router.post("/signin",loginValidation(),validation, signin);
router.get("/current",isAuth,(req,res)=>{
    res.send(req.admin)
})

module.exports = router;
