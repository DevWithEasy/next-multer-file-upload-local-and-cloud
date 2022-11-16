import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    image: {
        public_id : String,
        url : String
    }
},{timestamps : true});

const ProductCloud = mongoose.models?.ProductCloud || mongoose.model("ProductCloud",productSchema);

export default ProductCloud;