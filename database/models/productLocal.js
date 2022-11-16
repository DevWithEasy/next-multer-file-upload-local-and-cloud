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
        type : String,
        required : true
    }
},{timestamps : true});

const ProductLocal = mongoose.models?.ProductLocal || mongoose.model("ProductLocal",productSchema);

export default ProductLocal;