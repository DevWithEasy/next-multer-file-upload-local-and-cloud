// pages/api/product/add/local.js
import nc from "next-connect";
import initDatabase from "../../../../database/initDatabase";
import ProductLocal from "../../../../database/models/productLocal";
import upload from "../../../../libs/multer/localUpload";

export const config = {
    api: {
      bodyParser: false,
    },
}

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
        const product = new ProductLocal({
          name : req.body.name,
          price : req.body.price,
          image : req.file.filename
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