import Order from "../models/Order";

class OrderController {
    static async list(request, response) {
        //je veux  toute les commandes
        let status = 200;
        let body = {};

        try {
            let order = await Order.find();
            body = {'order': order, 'message': 'List of orders'};
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
            let order = await Order.create({
                num: request.body.orderNumber,
                date: request.body.orderDate
                //dont forget user id once create session/co
            });
            body = {'order': order, 'message': 'order created'};
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
            let order = await Order.findById(id);
            body = {'order': order, 'message': 'order details'};
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
            /*  let order = await Order.findByIdAndUpdate(id, {
                  $set: {
                      title: request.body.montitle,
                      content: request.body.moncontenu
                  }
              });*/
//          delete req.body.password;
            let order = await Order.update(id, request.body);
            body = {'order': order, 'message': 'order updated'};
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }

    /*
    *Delete order
     */
    static async delete(request, response) {
        let status = 200;
        let body = [];
        try {
            let id = request.params.id;
            await Order.deleteOne(id);
            body = {'message': 'order deleted'};
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }
}

export default OrderController;