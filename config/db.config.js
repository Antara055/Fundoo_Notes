const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/UserRegistration",{
    useNewUrlParser:true,
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database.', err);
    process.exit();
});