import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Product extends Component {
    constructor(props) {
        super(props);
    }

    
    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return (
            <tr>
                <td>{this.props.data.name_product}</td>
                <td>{this.props.data.price}</td>
                <td>{this.props.data.desc}</td>
                <td>
                    <Link className="btn btn-primary" to={`/update-product/${this.props.data._id}`}>Modifier</Link>
                </td>
            </tr>

        )
    }
}

export default Product;