import React, {Component} from 'react';
import ProductService from '../services/products.service';
import Product from '../components/product';


class Home extends Component {
    
    constructor(props){
        super(props);
        
        //bdd interne
        this.state = {
            title: "Vente e-commerce",      //appeler dans render en bas : this.state.title
            
        };
    }
        
    async componentDidMount(){
        //recup des products depuis l'api
        let response = await ProductService.list();
        if(response.ok){
            //la reponse est de type 200
            let data = await response.json();
            console.log(data);
            this.setState({
                products : data
            });
        }
    }

    myOnCLickButton(){
        console.log("clicky");
    }

    render(){
        return (
            <div className="container">
                <h1>{this.state.title}</h1>
                <br/><br/><br/>
                <p>VEUILLEZ VOUS <a href="/login">CONNECTER</a> POUR AVOIR ACCES AUX SERVICES DE VENTE</p>
            </div>
        )
    }
}

export default Home;