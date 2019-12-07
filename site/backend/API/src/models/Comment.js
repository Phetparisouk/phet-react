import {Schema, model} from 'mongoose';

const commentSchema = new Schema({

    comment_content:{
        type:String,
        required : true,
    },
    user_id:{
        type: Schema.Types.ObjectId,
        ref: 'User_Type'
    }
});
const Comment = model('Comment', commentSchema);
export default Comment;