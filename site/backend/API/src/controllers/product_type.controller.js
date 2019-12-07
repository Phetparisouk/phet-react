import Product_type from "../models/Product_type";

class ProductTypeController {
    static async list(request, response) {
        //je veux  tous les utilisateurs
        let status = 200;
        let body = {};

        try {
            let product_type = await Product_type.find();
            body = {'product_type': product_type, 'message': 'Type of product'};
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
            let product_type = await Product_type.create({
                lib_product: request.body.lib_product
            });
            body = {'product_type': product_type, 'message': 'product_type created'};
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
            let product_type = await Product_type.findById(id);
            body = {'product_type': product_type, 'message': 'product_type details'};
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }
}

export default ProductTypeController;