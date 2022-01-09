const express = require("express");
const router=express.Router();
const controller=require("../Controllers/controllerReg.js");
const validation = require("../middleware/validation");

router.post("/register", validation, controller.Registration);

router.post("/login", controller.login);

module.exports=router;
