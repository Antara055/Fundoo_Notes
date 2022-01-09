const joi = require("joi");

const validation = (req,res,next)=>{
  console.log("hello",req.body)
  const data=joi.object({
     firstName: joi.string().min(3).max(25).trim(true).required(),
     lastName: joi.string().min(3).max(25).trim(true).required(),
     email: joi.string().email().trim(true).required(),
     password: joi.string().min(8).trim(true).required()
  });

const vres=data.validate(req.body)
if (vres.error) {
  return res.status(400).send({
  success: false,
  message: vres.error.details[0].message,
});
  
} else {
    req.validatedBody = vres;
    next();
  }
};
module.exports = validation;