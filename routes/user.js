const router=require('express').Router();
const cloudinary=require('../utils/cloudinary');
const upload=require('../utils/multer');

const User = require('../schema/user');

router.post('/',upload.single('image'),async(req,res)=>{
    try {
        const result=await cloudinary.uploader.upload(req.file.path);

        let user=new User({
            name:req.body.name,
            file:result.secure_url,
            cloudinary_id: result.public_id
        })

        await user.save();
        res.json(user);
    } catch (error) {
        console.log(error);
    }
})


router.delete("/:id",async(req,res)=>{
    try {
        let user=await User.findById(req.params.id);
        await cloudinary.uploader.destroy(user.cloudinary_id);
        await User.findByIdAndDelete(req.params.id);
        res.json(user);
    } catch (error) {
        console.log(error);
    }
})


router.get("/:id",async(req,res)=>{
    let user=await User.findById(req.params.id);
    res.json(user);
})

module.exports=router;