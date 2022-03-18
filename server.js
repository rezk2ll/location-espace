// importation express
const express=require('express')
const cors = require('cors')

//creation d'instance
const app=express()
app.use(cors())

//importation dotenv
require('dotenv').config()

//connect data base with server
const connectDB=require("./config/ConnectDB")
connectDB()

//json
app.use(express.json())

//route global
app.use("/api/admin",require("./routes/admin")) 
app.use("/api/user",require("./routes/user"))



//creation of server
const pore=process.env.PORT
app.listen(pore,(error)=>{
    error?console.log(error):console.log(`The server is running on port:${pore}`)
})