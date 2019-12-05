import { Schema, model } from "mongoose";

const product_typeSchema = new Schema({

    lib_product: {              //type name
        type: String,
        required: true
    }
});

const Product_type = model('Product_type', product_typeSchema);

export default Product_type;