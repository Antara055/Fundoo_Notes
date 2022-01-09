const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    firstName: {
        type: String,
      },
      lastName: {
        type: String,
      },
      email: {
        type: String,
        required:true
      },
      password: {
        type: String,
      },
    },
    {
      timestamps: true,
    }
);

const User = mongoose.model("UserRegister",userSchema);

module.exports = User;
