const mongoose = require("mongoose");
const FileSchema = new mongoose.Schema({
    name:String,
    brand:String,
    price:Number,
    defaultImage:String,
    images:[String]

})

module.exports = mongoose.model("images", FileSchema);