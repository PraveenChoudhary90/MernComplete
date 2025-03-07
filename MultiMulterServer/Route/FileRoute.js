const express = require("express");
const route = express.Router();
const multer = require("multer")
const FileController = require("../Controller/FileController");
const path = require("path")


const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
     cb(null, "uploads/")
    },
    filename:(req,file,cb)=>{
         cb(null, `${Date.now()}-${file.originalname}`);
    },
})

 // File filter for allowed extensions (optional)
     const fileFilter = (req, file, cb) => {
       const allowedFileTypes = /jpeg|jpg|png|pdf|avif|webp/;
       const extname = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
       const mimetype = allowedFileTypes.test(file.mimetype);
     
       if (extname && mimetype) {
         cb(null, true);
       } else {
         cb(new Error('Invalid file type. Only JPEG, PNG, and PDF are allowed.'));
       }
     };
     
     // Multer middleware configuration
     const upload = multer({
       storage: storage,
       fileFilter: fileFilter,
       limits: { fileSize: 5 * 1024 * 1024 }, // Limit files to 5MB
     });

route.post("/InsertProduct", upload.array("images", 15) ,FileController.InsertData);
route.get("/Displaydata", FileController.Displaydata)
route.post("/Showimage", FileController.ShowImagedata)








module.exports = route;