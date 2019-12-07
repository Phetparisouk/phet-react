//entete sur chaque page
import React, {Component} from 'react';
import Post from '../components/Post';
import PostService from '../services/posts.service';
import {Link} from 'react-router-dom';

class Header extends Component {
    
    constructor(props){
        super(props);
        
    }
    
  

    //affichage dans la page web
    render(){
        return (
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="/">Accueil</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            
                        <li class="nav-item">
                            <Link className="nav-link" to={'/login'}>Connexion</Link>
                        </li>

                        <li class="nav-item">
                            <Link className="nav-link" to={'/inscription'}>Inscription</Link>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Produit
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="/products">Voir les produits</a>
                            <a class="dropdown-item" href="/add-product">Ajouter un produit</a>
                            </div>
                        </li>
                        </ul>
                    </div>
                </nav>
        )
    }
}

export default Header;