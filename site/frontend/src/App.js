import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import Inscription from './pages/Inscription';
import Product from './components/product';
import AddProduct from './pages/products/addProduct';
import User from './pages/users/user';



class App extends Component{
  /*
  constructor(props) {
    super(props);
    console.log("Constructor")
  }

  componentWillMount(){
    console.log("Component will mount")
  }

  componentDidMount(){
    console.log("Component did mount")
  }
  */

  render(){
    return (
      //<div>Hello worls</div>
      <BrowserRouter>

          <Header></Header>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/inscription" exact component={Inscription} />
          <Route path="/products" exact component={Product} />
          <Route path="/add-product" exact component={AddProduct} />
          <Route path="/users" exact component={User} />
          <Footer></Footer>
      </BrowserRouter>
    )
  }

}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export default App;
