import React, {Component} from 'react';
import UserService from "../../services/users.service";
import UserTypeService from "../../services/userType.service";

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            mail: '',
            pwd: '',
            address: '',
            creditCard: '',
            user_type: '',
            success: false,
            msgSuccess: 'successful'
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }


    async componentDidMount() {
        let responseCoteType = await UserTypeService.list();
        let dataCoteType = await responseCoteType.json();
        let user_type = dataCoteType.user_type;
        user_type.filter(function (item) {
            return (item.label === "user_type");
        });
        this.setState({
            user_type: user_type[0]._id
        });
    }

    async submit(e) {
        e.preventDefault();

        this.setState({success: false});
        let body = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            mail: this.state.mail,
            pwd: this.state.pwd,
            address: this.state.address,
            creditCard: this.state.creditCard,
            user_type: this.state.user_type
        };
        let response = await UserService.create(body);
        if (response.ok) {
            this.setState({
                success: true,
                msgSuccess: "user created"
            });
            this.props.history.push('/users');
        }
    }


    render() {
        return (<div className="row">
                <div className="col-md-12 card card-primary">
                    <div className="card-header">
                        <h3 className="card-title">Ajouter un nouveau utilisateur</h3>
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
                            <button type="submit" className="btn btn-primary">Ajouter</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddUser;