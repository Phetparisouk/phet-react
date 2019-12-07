import User from "../models/User";
import User_type from "../models/User_type";

class UserController{
    static async list(request, response) {
        //je veux  tous les utilisateurs
        let status = 200;
        let body = {};

        try {
            let user = await User.find();
            body = {'user': user, 'message': 'List of users'};
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
            let user = await User.create({
                firstName: request.body.firstName,
                lastName: request.body.lastName,
                mail: request.body.mail,
                pwd: request.body.pwd,
                address: request.body.address,
                creditCard: request.body.creditCard,
                userType: request.body.userType
            });
            body = {'user': user, 'message': 'user created'};
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
            let user = await User.findById(id);//User.findById(id).populate('User_type)')
            body = {'user': user, 'message': 'User details'};
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
            let user = await User.update(id, request.body);
            body = {'user': user, 'message': 'user updated'};
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }

    /*
    *Delete user
     */
    static async delete(request, response) {
        let status = 200;
        let body = [];
        try {
            let id = request.params.id;
            await User.deleteOne(id);
            body = {'message': 'user deleted'};
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }

//      login de connexion
    static async connexion(request, response){
        let status=200; 
        let body={};
        try{
            let user = await User.findOne({firstName: request.body.firstName});
            let pwd= request.body.pwd; 
            if( pwd===user.pwd){
                body={user, 'message':'you are connected'};
            }
        }
        catch(error){
            status=500;
            body={'message': error.message}
        }
        return response.status(status).json(body);
    }

}

export default UserController;