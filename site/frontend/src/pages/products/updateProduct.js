import React, {Component} from 'react';
import Product from './product';
import ProductService from '../../services/products.service';

class UpdateProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {

            name_product: '',
            price: '',
            desc: '',
            productType: '',
            success: false,
            msgSuccess: 'successful'
        }
    }

    async componentWillMount() {
        let id = this.props.match.params.id;
        let response = await ProductService.details(id);
        if (response.ok) {
            let data = await response.json();
            this.setState({

                name_product: data.product.name_product,
                price: data.product.price,
                desc: data.product.desc,
                productType: data.product.productType
            });
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    async submit(e) {
        e.preventDefault();
        this.setState({success: false});
        let body = {
            name_product: this.state.name_product,
            price: this.state.price,
            desc: this.state.desc,
            productType: this.state.productType
        };
        console.log(body);
        let response = await ProductService.update(this.state.id, body);
        if (response.ok) {
            this.setState({
                success: true,
                msgSuccess: "Votre produit a ete modifie"
            });
            this.props.history.push('/products');
        }
    }

    async deleteProduct(id) {
        let response = await ProductService.delete(id);
        if (response.ok) {
            this.props.history.push('/products');
        }
        console.log(response);
    }


    render() {
        return (<div className="row">
                <div className="col-md-12 card card-primary">
                    <div className="card-header">
                        <h3 className="card-title">Modifier le produit</h3>
                        <button type="submit" className="btn delete"
                                onClick={() => this.deleteProduct(this.state.id)}>Supprimerr
                        </button>
                    </div>
                    <form onSubmit={(e) => this.submit(e)}>
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="name_product">Nom du produit</label>
                                <input type="text" required className="form-control" id="name_product"
                                       value={this.state.name_product} onChange={(e) => this.handleChange(e)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="price">Prix</label>
                                <input type="text" required className="form-control" id="price"
                                       value={this.state.price} onChange={(e) => this.handleChange(e)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Description</label>
                                <input type="text" required className="form-control" id="desc"
                                       value={this.state.desc} onChange={(e) => this.handleChange(e)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="productType">Type de produit</label>
                                <input type="text" required className="form-control" id="productType"
                                       value={this.state.productType} onChange={(e) => this.handleChange(e)}/>
                            </div>
                        
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Confirmer la modification</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default UpdateProduct;