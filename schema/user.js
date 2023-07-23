const mongoose=require('mongoose')

const user=new mongoose.Schema({
    name:{
        type:String,
    },
    file:{
        type:String,
    },
    cloudinary_id:{
        type:String,
    }
})

module.exports=mongoose.model('user',user)