import React, {Component} from 'react';
import {Link} from "react-router-dom";
import UserService from "../services/users.service";

class Login extends Component {
    constructor(props) {
        super(props);
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    async submit(e) {
        e.preventDefault();
        let body = {
              firstName: this.state.firstName,
              pwd: this.state.pwd,
        };
        let response = await UserService.connexion(body);
        let data = await response.json();
        if (response.ok) {
          if(data.user !== undefined)  {
              localStorage.setItem('actualUser', JSON.stringify(data.user));
              /*
              if (data.user.role==='admin'){
                  window.location='/';
              }
              if (data.user.role==='user'){
                  window.location='/homeUser';
              }*/
          }
        }
      }

    render() {
        return (
            <div className="login-box">
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Connectez-vous</p>
                        <form onSubmit={(e) => this.submit(e)}>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" id="firstName"
                                       onChange={(e) => this.handleChange(e)}/>
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope"/>
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" className="form-control" id="pwd"
                                       onChange={(e) => this.handleChange(e)}/>
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-8">
                                </div>
                                <div className="col-4">
                                    <button type="submit" className="btn btn-primary btn-block">Connexion</button>
                                </div>
                            </div>
                        </form>
                        <p className="mb-0">
                            <a href="/inscription" className="text-center">Nouveau sur notre site ? Inscrivez-vous ! </a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;