import {Schema, model} from 'mongoose';

const commentSchema = new Schema({

    comment_content:{
        type:String,
        required : true,
    }
});
const Comment = model('Comment', commentSchema);
export default Comment;