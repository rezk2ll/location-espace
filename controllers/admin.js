const Admin=require("../model/Admin")
const bcrypt=require("bcrypt")
//importation jsonwebtoken
const jwt = require("jsonwebtoken");


exports.signup=async(req,res)=>{
   try {
       const {name,email,password,adresse}=req.body
       const foundAdmin = await Admin.findOne({ email });
    if (foundAdmin) {
      return res.status(400).send({ errors: [{ msg: "email should be unique" }] });
    }
    //hashage mot de passe with bcrypt
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newAdmin = new Admin({ ...req.body });
    newAdmin.password = hashedPassword;
    await newAdmin.save()
    const token = jwt.sign({ id: newAdmin._id }, process.env.SECRET_KEY, {expiresIn: "5h",});
    return res.status(200).send({ msg: "the admin added in data base", admin:newAdmin,token })
   } catch (error) {
    return res.status(400).send({ msg: "cannot added this admin in data base" });
       
   }
}
//sign in

exports.signin=async(req,res)=>{
    try {
        const { email, password } = req.body;
        const foundAdmin = await Admin.findOne({ email });
        if (!foundAdmin) {
          return res.status(400).send({ errors: [{ msg: "bad credentiel" }] });
        } 
        const foundPassword = await bcrypt.compare(password, foundAdmin.password);
    if (!foundPassword) {
      return res.status(400).send({ errors: [{ msg: "bad credentiel" }] });
    }
    //creation of token
    const token=jwt.sign({id:foundAdmin._id},process.env.SECRET_KEY)
        return res.status(200).send({ msg: "login success", admin:foundAdmin,token });
    } catch (error) {
        return res.status(400).send({ msg: "login failed" });
    }
}