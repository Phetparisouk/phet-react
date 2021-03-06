import Comment from "../models/Comment";

class CommentsController {
    static async create(request,response) {
        let status = 200;
        let body = {};
        try {
            let comment = await Comment.create({
                comment_content: request.body.comment_content,
                user_id: request.body.post_id
            });
            body = {comment , 'message': 'comment created'};
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }
    static async details(request,response) {
        let status = 200;
        let body = {};
        try {
            let comment = await Comment.findById(request.params.id).populate('post_id');
            body = {comment , 'message': 'comment details'};
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }
}

export default CommentsController;