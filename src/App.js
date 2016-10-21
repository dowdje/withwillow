import React, { Component } from 'react';
<<<<<<< HEAD
import './App.css';
import Memorial from "./components/memorial"

import NavBar from './components/navbar';
// import {Navbar} from 'react-bootstrap'


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
          {this.props.children}
      </div>
    );
  }
}

export default App;
