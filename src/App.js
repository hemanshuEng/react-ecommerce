import React, { Component } from "react";
import {Switch , Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ProductList from "./components/ProductList/ProductList";
import Default from "./components/Default/Default";
import Details from "./components/Details/Details";
import Cart from "./components/Cart/Cart";

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="container">
            <Navbar/>
            <Switch>
                <Route path ="/" exact component={ProductList}></Route>
                <Route path ="/details" component={Details}></Route>
                <Route path ="/cart" component={Cart}></Route>
                <Route  component={Default}></Route>
            </Switch>
           
          </div>
      </div>
    );
  }
}

export default App;
