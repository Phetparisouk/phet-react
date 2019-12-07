import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ProductService from '../../services/products.service';
import Product from './product';

class ProductsList extends Component {
    constructor(props) {
        super(props);
        //bdd interne
        this.state = {
            title: "Products list",
            products: []
        }
    }


    componentWillMount() {
        console.log("test willMont");
    }


    onClickButton() {
        console.log("click");
    }

    async componentDidMount() {
        console.log("did");
        let response = await ProductService.list();
        if (response.ok) {
            let data = await response.json();
            this.setState({
                products: data.products
            });
        }
    }


    render() {
        return (
            <div> <h1>{this.state.title}</h1>
            <Link type="submit" to={'add-product'} className="btn btn-success">Ajouter un produit</Link>

                {
                    this.state.products.length !== 0 ?
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Prix</th>
                                <th>Description</th>
                                <th>Type de produit</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.products.map((item, index) => {
                                return (<Product key={index} data={item} />)
                            })
                            }
                            </tbody>
                        </table>
                        :
                        <h1>Incomplet</h1>
                }
            </div>
        )
    }
}
export default ProductsList;