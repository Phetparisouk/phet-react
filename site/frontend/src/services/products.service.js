const baseUrl = "http://127.0.0.1:3001";

class ProductService {
    static async list() {
        let init = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        };
        let call = await fetch(`${baseUrl}/products`, init);
        return call;
    }
    static async details(id){
        let init = {
            method: "GET",
            headers:{
                "Content-Type": "application/json"
            }
        };
        let call = await fetch(`${baseUrl}/products/${id}`, init);
        console.log(call);
        return call;
    }

    static async create(body){
        let init = {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        };
        let call = await fetch(`${baseUrl}/products`, init);
        return call;
    }
    static async update(id, body){
        let init = {
            method: "PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        };
        let call = await fetch(`${baseUrl}/products/${id}`, init);
        return call;
    }
    static async delete(id){
        let init = {
            method: "DELETE",
            headers:{
                "Content-Type": "application/json"
            }
        };
        let call = await fetch(`${baseUrl}/products/${id}`, init);
        return call;
    }
}

export default ProductService;