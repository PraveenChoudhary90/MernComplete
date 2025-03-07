const FileModel =require("../Model/FileModel");




const InsertData  =async(req,res)=>{
    const {name, brand, price}= req.body;
    const imgurl = req.files.map(file => file.path);
    const defaultImage= imgurl[0];
    const MyData = await FileModel.create({
        name:name,
        brand:brand,
        price:price,
       defaultImage:defaultImage,
       images:imgurl
        
    })
    console.log(MyData);
    res.send(MyData);
}

const Displaydata = async(req,res)=>{
    const Data = await FileModel.find();
    res.send(Data);
}

module.exports = {
    InsertData,
    Displaydata
}