import User_type from "../models/User_type";

class UserTypeController {
    static async list(request, response) {
        //je veux  tous les utilisateurs
        let status = 200;
        let body = {};

        try {
            let user_type = await User_type.find();
            body = {'user_type': user_type, 'message': 'Type users'};
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
            let user_type = await User_type.create({
                lib_user_type: request.body.lib_user_type
            });
            body = {'user_type': user_type, 'message': 'user_type created'};
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
            let user_type = await User_type.findById(id);
            body = {'user_type': user_type, 'message': 'user_type details'};
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }
}

export default UserTypeController;