import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import UserService from '../services/users.service';

class Register extends Component {
    //state = local storage du composant
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            mail: '',
            address: '',
            creditCard: '',
            pwd: '',
            pwdConfirm: '',
            errorMessage: '',
            titleMessage: ''
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }


    async submit(e) {
        this.setState({
            message: "",
            title: ""
        });
        e.preventDefault();
        if (this.state.password === this.state.passwordConfirm) {
            this.setState({success: false});
            let body = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                mail: this.state.mail,
                address: this.state.mail,
                creditCard: this.state.creditCard,
                password: this.state.password,
                user_type: "5dea775e2a5578036d4948a0",      //id user normal dans la bdd
            };
            let response = await UserService.create(body);
            if (response.ok) {
                window.location.replace('/login');
            }
        } else {
            this.setState({
                message: "Mot de passe non identiques",
                title: "Erreur"
            })
        }
    }

    render() {
        return (
            <div className="register-box">
                <div className="card">
                    <div className="card-body register-card-body">
                        <h1>Inscription</h1>
                        <form onSubmit={(e) => this.submit(e)}>
                            <div className="row input-group mb-3">
                                <label className="col-lg-12">Prenom</label>
                                <input type="text" id="firstName" required className="form-control col-lg-12"
                                       onChange={(e) => this.handleChange(e)}/>
                                <div className="input-group-append">

                                </div>
                            </div>
                            <div className="row input-group mb-3">
                                <label className="col-lg-12">Nom</label>
                                <input type="text" id="lastName" required className="form-control col-lg-12"
                                       onChange={(e) => this.handleChange(e)}/>
                                <div className="input-group-append">
                                </div>
                            </div>
                            <div className="row input-group mb-3">
                                <label className="col-lg-12">Mail</label>
                                <input type="email" id="mail" required className="form-control col-lg-12"
                                       onChange={(e) => this.handleChange(e)}/>
                            </div>
                            <div className="row input-group mb-3">
                                <label className="col-lg-12">Carte bancaire</label>
                                <input type="text" id="creditCard" required className="form-control col-lg-12"
                                       onChange={(e) => this.handleChange(e)}/>
                                <div className="input-group-append">
                                </div>
                            </div>
                            <div className="row input-group mb-3">
                                <label className="col-lg-12">Adresse postal</label>
                                <input type="text" id="address" required className="form-control col-lg-12"
                                       onChange={(e) => this.handleChange(e)}/>
                                <div className="input-group-append">
                                </div>
                            </div>
                            <div className="row input-group mb-3">
                                <label className="col-lg-12">Mot de Passe</label>
                                <input type="password" id="pwd" required className="form-control col-lg-12"
                                       onChange={(e) => this.handleChange(e)}/>
                            </div>
                            <div className="row input-group mb-3">
                                <label className="col-lg-12">Confirmer votre mot de passe</label>
                                <input type="password" id="pwdConfirm" required className="form-control col-lg-12"
                                       onChange={(e) => this.handleChange(e)}/>
                                <div className="input-group-append">
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <button type="submit" className="btn btn-primary btn-block">Confirmer l'inscription</button>
                                </div>
                            </div>
                        </form>
                        <div className="social-auth-links text-center">
                        </div>
                        <Link to={"/login"} className="text-center">Vous avez deja un compte? Connectez-vous ici</Link>
                    </div>
                </div>
            </div>
        );
    }
}
export default Register;