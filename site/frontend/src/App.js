import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/Home';
//import DetailsPost from './pages/DetailsPost';
import Header from './components/Header';
import Footer from './components/Footer';
//import AddPost from './pages/AddPost';

//import logo from './logo.svg';
//import './App.css';


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
