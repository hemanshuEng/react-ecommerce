import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import classes from "./App.css";
import Navbar from "./components/Navigation/Navbar/Navbar";
import SideDrawer from "./components/Navigation/SideDrawer/SideDrawer";
import BackDrop from "./components/Backdrop/Backdrop";
import Home from "./components/Home/Home";
import ProductList from "./components/ProductList/ProductList";
import Default from "./components/Default/Default";
import Details from "./components/Details/Details";
import About from "./components/About/About";
import Cart from "./components/Cart/Cart";
import Modal from "./components/Modal/Modal";

class App extends Component {
  state = {
    sideDrawerOpen: false
  };
  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    return (
      <div className={classes.App}>
        <div className={classes.Container}>
          <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer
            show={this.state.sideDrawerOpen}
            click={this.backdropClickHandler}
          />
          {this.state.sideDrawerOpen ? (
            <BackDrop click={this.backdropClickHandler} />
          ) : null}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/shop" component={ProductList} />
            <Route path="/details" component={Details} />
            <Route path="/About" component={About} />
            <Route path="/cart" component={Cart} />
            <Route component={Default} />
          </Switch>
          <Modal />
        </div>
      </div>
    );
  }
}

export default App;
