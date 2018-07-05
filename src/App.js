import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './Header';
import {Footer} from './Footer';
import {CartItems} from './CartItems';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Footer/>
        <CartItems/>
      </div>
    );
  }
}

export default App;
