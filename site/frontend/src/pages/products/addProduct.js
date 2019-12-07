import React, {Component} from 'react';
import ProductTypeService from '../../services/productType.service';
import ProductsService from '../../services/products.service';

class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name_product: '',
            price: '',
            desc: '',
            product_type: '',
            success: false,
            msgSuccess: 'successful'
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }


    async componentWillMount() {
        let responseCoteType = await ProductTypeService.list();
        let dataCoteType = await responseCoteType.json();
        let product_type = dataCoteType.product_type;
        product_type.filter(function (item) {
            return (item.label === "product_type");
        });
        this.setState({
            product_type: product_type[0]._id
        });
    }

    async submit(e) {
        e.preventDefault();

        this.setState({success: false});
        let body = {
            name_product: this.state.name_product,
            price: this.state.price,
            desc: this.state.desc,
            product_type: this.state.product_type
        };
        let response = await ProductsService.create(body);
        if (response.ok) {
            this.setState({
                success: true,
                msgSuccess: "product created"
            });
            this.props.history.push('/products');
        }
    }


    render() {
        return (<div className="row">
                <div className="col-md-12 card card-primary">
                    <div className="card-header">
                        <h3 className="card-title">Ajouter un nouveau produit</h3>
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
                                <label htmlFor="desc">Description</label>
                                <input type="text" required className="form-control" id="desc"
                                       value={this.state.desc} onChange={(e) => this.handleChange(e)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="product_type">Type du produit</label>
                                <input type="text" required className="form-control" id="product_type"
                                       value={this.state.product_type} onChange={(e) => this.handleChange(e)}/>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Ajouter le produit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddProduct;