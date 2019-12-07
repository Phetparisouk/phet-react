import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class User extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <tr>
                <td>{this.props.data.firstName}</td>
                <td>{this.props.data.lastName}</td>
                <td>{this.props.data.mail}</td>
                <td>{this.props.data.pwd}</td>
                <td>{this.props.data.address}</td>
                <td>{this.props.data.creditCard}</td>
                <td>
                    <Link className="btn btn-primary" to={`/update-user/${this.props.data._id}`}>Modifier</Link>
                </td>
            </tr>

        )
    }
}

export default User;