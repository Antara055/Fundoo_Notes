const User = require("../model/modelReg");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");

class Service {
  async UserRegistration(obj) {
    const hashedPassWord=await bcrypt.hash(obj.password,10);
    obj.password=hashedPassWord;
    const info=await User.create(obj);
    return info;
  }

  async login(obj){
    const findData=await User.findOne({
      email:obj.email
    })
    console.log(findData)
    if(findData){
      const passworkCheck=await bcrypt.compare(obj.password,findData.password)
      if(passworkCheck){
  
        const secretKey="ant"
        const payload={email:findData.email};
        const token=jwt.sign(payload,secretKey);
        return "Successfully logged in";
      }
    }
    else{
      console.log("login failed")
    }
  }
}
module.exports = new Service();
    
