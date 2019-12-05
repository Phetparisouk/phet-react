//entete sur chaque page
import React, {Component} from 'react';
import Post from '../components/Post';
import PostService from '../services/posts.service';
import {Link} from 'react-router-dom';

class Footer extends Component {
    
    constructor(props){
        super(props);
        
    }
    
  

    //affichage dans la page web
    render(){
        return (
            <body class="d-flex flex-column">
                <div id="page-content">
                    <div class="container text-center">
                    <div class="row justify-content-center">
                        <div class="col-md-7">
                        <h1 class="font-weight-light mt-4 text-white">Sticky Footer using Flexbox</h1>
                        <p class="lead text-white-50">Use just two Bootstrap 4 utility classes and three custom CSS rules and you will have a flexbox enabled sticky footer for your website!</p>
                        </div>
                    </div>
                    </div>
                </div>
                <footer id="sticky-footer" class="py-4 bg-dark text-white-50">
                    <div class="container text-center">
                    <small>Copyright &copy; Your Website</small>
                    </div>
                </footer>
            </body>
        )
    }
}

export default Footer;