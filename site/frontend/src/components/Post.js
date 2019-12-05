import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Post extends Component{

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props);
    }

    render(){
        return(
            <tr key={this.props.data.id}>
                <td> 
                    <Link to ={`/posts/${this.props.data.id}`}>{this.props.data.id}</Link> 
                </td>
                <td>{this.props.data.title}</td>
                <td>{this.props.data.body.substr(0, 20)}....</td>
                <td>
                    <button className="btn btn-danger" onClick={() => this.props.deletePost(this.props.data.id)} >Supprimer</button>
                </td>

            </tr>
        )
    }
}

export default Post;