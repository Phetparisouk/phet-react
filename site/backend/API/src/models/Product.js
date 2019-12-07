import { Schema, model } from "mongoose";

const productSchema = new Schema({
    
    name_product: {              //product name
        type: String,
        required: true
    },
    price: {                    //price tag
        type: Number,
        required: true
    },
    desc: {                     //description
        type: String,
        required: true
    },
    productType:{
        type: Schema.Types.ObjectId,
        ref: 'Product_type',
        required: true
    }

});

const Product = model('Product', productSchema);

export default Product;