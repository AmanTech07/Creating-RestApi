// here we are creating connection for mongoose

const mongoose = require("mongoose");

mongoose.set('strictQuery', false);

mongoose.connect("mongodb://localhost:27017/students-api").then(()=>{
    console.log("Connection Successful");
}).catch((e)=>{
    console.log("No Connection");
})

