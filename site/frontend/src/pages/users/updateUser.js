import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import UserService from "../../services/users.service";

class UpdateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {

            firstName: '',
            lastName: '',
            mail: '',
            pwd: '',
            address: '',
            creditCard: '',
            success: false,
            msgSuccess: 'successful'
        }
    }

    async componentWillMount() {
        let id = this.props.match.params.id;
        let response = await UserService.details(id);
        if (response.ok) {
            let data = await response.json();
            this.setState({

                firstName: data.user.firstName,
                lastName: data.user.lastName,
                mail: data.user.mail,
                pwd: data.user.pwd,
                address: data.user.address,
                creditCard: data.user.creditCard
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
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            address: this.state.address,
            creditCard: this.state.creditCard,
            user_type: "5dea775e2a5578036d4948a0",      //type utilisateur normal (id de l'utilisateur normal, cf bdd)
        };
        console.log(body);
        let response = await UserService.update(this.state.id, body);
        if (response.ok) {
            this.setState({
                success: true,
                msgSuccess: "Votre user a ete modifie"
            });
            this.props.history.push('/users');
        }
    }

    async deleteUser(id) {
        let response = await UserService.delete(id);
        if (response.ok) {
            this.props.history.push('/users');
        }
        console.log(response);
    }


    render() {
        return (<div className="row">
                <div className="col-md-12 card card-primary">
                    <div className="card-header">
                        <h3 className="card-title">Modifier le profil</h3>
                        <button type="submit" className="btn delete"
                                onClick={() => this.deleteUser(this.state.id)}>Supprimerr
                        </button>
                    </div>
                    <form onSubmit={(e) => this.submit(e)}>
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="firstName">Prénom</label>
                                <input type="text" required className="form-control" id="firstName"
                                       value={this.state.firstName} onChange={(e) => this.handleChange(e)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Nom</label>
                                <input type="text" required className="form-control" id="lastName"
                                       value={this.state.lastName} onChange={(e) => this.handleChange(e)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="mail">Adresse mail</label>
                                <input type="email" required className="form-control" id="mail"
                                       value={this.state.mail} onChange={(e) => this.handleChange(e)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="pwd">Mot de passe</label>
                                <input type="password" required className="form-control" id="pwd"
                                       value={this.state.pwd} onChange={(e) => this.handleChange(e)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="address">Adresse postal</label>
                                <input type="text" required className="form-control" id="address"
                                       value={this.state.address} onChange={(e) => this.handleChange(e)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="creditCard">Carte bancaire</label>
                                <input type="text" required className="form-control" id="creditCard"
                                       value={this.state.creditCard} onChange={(e) => this.handleChange(e)}/>
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
export default UpdateUser;