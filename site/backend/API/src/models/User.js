import {Schema, model} from 'mongoose';

const userSchema = new Schema({

    firstName:{
        type:String,
        required : true,
    },
    lastName:{
        type: String,
        required:true
    },
    mail:{
        type:String,
        required : true,
    },
    pwd:{
        type:String,
        required : true,
    },
    address:{/*
        num_and_road:{
            type:String,
            required : true,
        },
        complement_addr:{
            type:String
        },
        zip_code:{
            type:String,
            required : true,
        },
        country:{
            type:String,
            required : true,
        }*/
        type:String,
        required : true,

    },
    creditCard:{
        type: Number,
        required : true,
    },
    userType:{
        type: Schema.Types.ObjectId,
        ref: 'User_type'
    }

});
const User = model('User', userSchema);
export default User;