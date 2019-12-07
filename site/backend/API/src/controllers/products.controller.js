
import Product_type from "../models/Product_type";
import Product from "../models/Product";

class ProductController{
    static async list(request, response) {
        //je veux  tous les blogs
        let status = 200;
        let body = {};

        try {
            let product = await Product.find();
            body = {'product': product, 'message': 'List of products'};
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
            let product = await Product.create({
                name_product: request.body.name_product,
                price: request.body.price,
                desc: request.body.desc,
                productType: request.body.productType
            });
            body = {'product': product, 'message': 'product created'};
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
            let product = await Product.findById(id);
            body = {'product': product, 'message': 'Product details'};
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
            /*  let product = await Product.findByIdAndUpdate(id, {
                  $set: {
                      title: request.body.montitle,
                      content: request.body.moncontenu
                  }
              });*/
//          delete req.body.password;
            let product = await Product.update(id, request.body);
            body = {'product': product, 'message': 'product updated'};
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }

    /*
    *Delete product
     */
    static async delete(request, response) {
        let status = 200;
        let body = [];
        try {
            let id = request.params.id;
            await Product.deleteOne(id);
            body = {'message': 'product deleted'};
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }
}

export default ProductController;