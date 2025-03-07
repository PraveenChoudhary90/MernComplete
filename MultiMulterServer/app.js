const express  =require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const FileRoute = require("./Route/FileRoute");

app.use(cors());
// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Parse incoming requests with urlencoded payloads
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/uploads', express.static('uploads'))

mongoose.connect(process.env.STRING).then(()=>{
    console.log("DB IS CONNECTED")
})



app.use("/Product", FileRoute)




const port = process.env.PORT;

app.listen(port,()=>{
    console.log(`Server is running on ${port} port`)
})