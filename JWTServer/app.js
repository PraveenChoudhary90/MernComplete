const express= require("express");
const app=express();
const cors= require("cors");
const bodyParser = require('body-parser');
const mongoose= require("mongoose");
require("dotenv").config();
const UserRoute = require("./Route/UserRoute")
app.use(cors());
// Parse incoming requests with JSON payloads
app.use(bodyParser.json());
// Parse incoming requests with urlencoded payloads
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect(process.env.DBCONN).then(()=>{
    console.log("DB connected!!!");
})



app.use("/user", UserRoute);





const Port=process.env.PORT || 8000;
app.listen(Port, ()=>{
    console.log(`server run on  port ${Port}`);
})