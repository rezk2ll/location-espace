const mongoose=require("mongoose")

const {Schema}=mongoose

const adminSchema=new Schema({
    name:{
        type:"string",
        required:true,
    },
    email:{
        required: true,
        type: String,
        unique: true,
    },
    password:{
        type:"string",
        required:true,
    },
    adresse:{
        type:"string",
        required:true,
    },
})
module.exports=Admin=mongoose.model("/admin",adminSchema)