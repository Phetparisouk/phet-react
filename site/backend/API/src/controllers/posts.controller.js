import Post from "../models/Post";

class PostController {
    static async list(request, response) {
        //je veux  tous les blogs
        let status = 200;
        let body = {};
        /**
         * *PLusieurs méthodes :
         * Post.find({date : [$gt > 10]}) //lister tous les posts
         * Post.findOne({slug: "mon_titre"});
         * Post.findById("123");
         *
         * */
        try {
            let posts = await Post.find();
            body = {'posts': posts, 'message': 'List posts'};
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }

    static async create(request, response) {
        let status = 200;
        let body = {};
        try {
            let posts = await Post.create({
                title: request.body.montitle,
                content: request.body.moncontenu
            });
            body = {'posts': posts, 'message': 'post created'};
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }

    static async details(request, response) {
        let status = 200;
        let body = [];
        try {
            let id = request.params.id;
            let posts = await Post.findById(id);
            body = {'posts': posts, 'message': 'Details'};
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }

    static async update(request, response) {
        let status = 200;
        let body = [];
        try {
            let id = request.params.id;
            /*  let post = await Post.findByIdAndUpdate(id, {
                  $set: {
                      title: request.body.montitle,
                      content: request.body.moncontenu
                  }
              });*/
//          delete req.body.password;
            let post = await Post.update(id, request.body);
            body = {'post': post, 'message': 'post updated'};
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }

    /*
    *Delete Post
     */
    static async delete(request, response) {
        let status = 200;
        let body = [];
        try {
            let id = request.params.id;
            await Post.deleteOne(id);
            body = {'message': 'post deleted'};
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }
}

export default PostController;