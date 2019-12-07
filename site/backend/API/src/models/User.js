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
    address:{
        type:String,
        required : true,

    },
    creditCard:{
        type: Number,
        required : true,
    },
    userType:{
        type: Schema.Types.ObjectId,
        ref: 'User_type',
        required: true
    }

});
const User = model('User', userSchema);
export default User;