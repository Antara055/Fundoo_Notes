const Service=require("../Service/serviceReg")
class Registration{
    Registration(req,res){
        Service
        .UserRegistration(req.body)
        .then((result) => {
          console.log(req.body)
          return res.status(201).send(result);
        })
        .catch((err) => {
          return res.status(500).send(err);
        });
    } 
    login(req,res){
      Service
      .login(req.body)
      .then((result)=>{
        return res.status(201).send(result);
      })
      .catch((err)=>{
        return res.status(500).send(err);
      })
    }
}


module.exports = new Registration();
