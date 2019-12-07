import React, {Component} from 'react';
import User from "./user";
import {Link} from "react-router-dom";
import UserService from '../../services/users.service';

class UsersList extends Component {
    constructor(props) {
        super(props);
        //bdd interne
        this.state = {
            title: "Users list",
            users: []
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
        let response = await UserService.list();
        if (response.ok) {
            let data = await response.json();
            this.setState({
                users: data.users
            });
        }
    }


    render() {
        return (
            <div> <h1>{this.state.title}</h1>
            <Link type="submit" to={'add-user'} className="btn btn-success">Ajouter un user</Link>

                {
                    this.state.users.length !== 0 ?
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Prénom</th>
                                <th>Mail</th>
                                <th>Mot de passe</th>
                                <th>Adresse</th>
                                <th>Carte bancaire</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.users.map((item, index) => {
                                return (<User key={index} data={item} />)
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
export default UsersList;