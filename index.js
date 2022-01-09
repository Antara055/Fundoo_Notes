const express = require('express');
const mongoose=require('mongoose');
require('./config/db.config');
require('dotenv').config();

//create app
let app=express();
var router=require("./Routers/routerReg");


app.use(express.json());
app.use("/",router);

//define a route
app.get("/",(req,res)=>{
    res.json({"msg":"welcome to the user registration"})
})

//listen for request
app.listen(3000,()=>{
    console.log("Server is running on port 3000")
});