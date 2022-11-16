// pages/api/product/add/cloud.js
import nc from "next-connect";
import initDatabase from "../../../../database/initDatabase";
import ProductCloud from "../../../../database/models/productCloud";
import upload from "../../../../libs/multer/cloudUpload";

const  cloudinary = require ("cloudinary").v2;

export const config = {
  api: {
    bodyParser: false,
  },
}
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_NAME, 
  api_key: process.env.CLOUDINARY_API,
  api_secret: process.env.CLOUDINARY_SECRET 
});

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
})
  .use(upload.single('image'))
  .post(async(req, res) => {
    try {
      await initDatabase()
      if(req.body && req.file){
        const image = await cloudinary.uploader.upload(req.file.path,{folder : "products"})
        const product = new ProductCloud({
          name : req.body.name,
          price : req.body.price,
          image : {
            public_id : image.public_id,
            url : image.url
          }
        })
        const result = await product.save()
        res.status(200).json({
          success : true,
          status : 200,
          product : result,
        })
      }else{
        res.status(400).json({
          success : false,
          status : 400,
          message : 'Something went wrong'
        })
      }
    } catch (error) {
      res.status(500).json({
        success : false,
        status: 500,
        message: error.message
      })
    }
  })

export default handler;