const express = require("express");
require("./db/conn.js");       //we are requiring conn.js file here
// const Student = require("./models/students.js");
const studentRouter = require("./routers/route");

const app = express();
const port = process.env.PORT || 3000

app.use(studentRouter);

app.listen(port, () =>{
    console.log(`connection is setup at ${port}`);
})
