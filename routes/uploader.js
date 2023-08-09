const router=require('express').Router();
const cloudinary=require('../utils/cloudinary');
const upload=require('../utils/multer');


router.post('/',upload.single('file'),async(req,res)=>{
    try {
        const result=await cloudinary.uploader.upload(req.file.path);
        res.status(200).json({"sucess":true,"file_url":result.secure_url});
    } catch (error) {
        res.status(500).json({"sucess":false,"message":"Internal Server Error"})
    }
})

module.exports=router;