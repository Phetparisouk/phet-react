import { Schema, model } from "mongoose";

const orderSchema = new Schema({

    num: {              //order number
        type: Number,
        required: true
    },
    date: {              //order date
        type: Date,
        required: true
    },
    user_id:{
        type: Schema.Types.ObjectId,
        ref: 'User_Type'
    }
});

const Order = model('Order', orderSchema);

export default Order;