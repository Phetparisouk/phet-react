import React, {Component} from 'react';
import Post from '../components/Post';
import PostService from '../services/posts.service';


class Home extends Component {
    
    constructor(props){
        super(props);
        
        //bdd interne
        this.state = {
            title: "Vente e-commerce",      //appeler dans render en bas : this.state.title
            posts: []
        };
    }
        
    async componentDidMount(){
        //recup des post depuis l'api
        let response = await PostService.list();
        if(response.ok){
            //la reponse est de type 200
            let data = await response.json();
            console.log(data);
            this.setState({
                posts : data
            });
        }
    }

    async deletePost(id){
        //console.log(id); affiche l id une fois cliqu2 sur supprimer
        let response = await PostService.delete(id);
        if(response.ok){
            let posts = this.state.posts;
            let index = posts.findIndex(post => post.id === id);
            posts.splice(index, 1);

            this.setState({posts: posts});
        }

    }

    myOnCLickButton(){
        console.log("je clique");
    }

    render(){
        return (
            <div className="container">
                <h1>{this.state.title}</h1>

            

                <table className="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>titre</th>
                            <th>contenu</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.posts.map((item, index) => {
                                return (
                                    <Post key={index} data={item} deletePost={(id) =>this.deletePost(id)} />
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Home;