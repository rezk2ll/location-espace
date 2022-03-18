//importation mongoose
const mongoose=require("mongoose")

const connectDB=async()=>{
    try {
       await mongoose.connect(process.env.URI)
       console.log("data base connected successfully") 
    } catch (error) {
        console.log("data base connection failed",error)
    }
}
module.exports=connectDB