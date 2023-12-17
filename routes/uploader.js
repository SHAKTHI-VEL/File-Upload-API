const router=require('express').Router();
const cloudinary=require('../utils/cloudinary');
const upload=require('../utils/multer');

/**
 * @swagger
 * /upload:
 *  post:
 *    description: Insert Image or PDF
 *    parameters:
 *    - name: file
 *      description: Upload image or pdf
 *      required: true
 *      in: formData
 *      type: file
 *    responses:
 *      200:
 *        description: Image uploaded successfully
 *      500:
 *        description: Error in uploading Image
 *
 */
router.post('/',upload.single('file'),async(req,res)=>{
    try {
        const result=await cloudinary.uploader.upload(req.file.path);
        res.status(200).json({"success":true,"file_url":result.secure_url});
    } catch (error) {
        res.status(500).json({"success":false,"message":"Internal Server Error"})
    }
})


/**
 * @swagger
 * /upload/video:
 *  post:
 *    description: Insert Video
 *    parameters:
 *    - name: video
 *      description: Upload video
 *      required: true
 *      in: formData
 *      type: file
 *    responses:
 *      200:
 *        description: Video uploaded successfully
 *      500:
 *        description: Error in uploading Video
 *
 */
router.post('/video',upload.single('video'),async(req,res)=>{
    try {
        const result=await cloudinary.uploader.upload(req.file.path, { resource_type: "video",folder:"video" });
        res.status(200).json({"success":true,"file_url":result.secure_url});
    } catch (error) {
        res.status(500).json({"success":false,"message":"Internal Server Error"})
    }
})

module.exports=router;