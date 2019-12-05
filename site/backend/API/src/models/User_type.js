import { Schema, model } from "mongoose";

const user_typeSchema = new Schema({
    
    lib_user_type: {              //type name
        type: String,
        required: true
    }
});

const User_type = model('User_type', user_typeSchema);

export default User_type;