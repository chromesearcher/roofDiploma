import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Header from "./Header.js"
import threeEntryPoint from "./threejs/threeEntryPoint"

class App extends Component {

  componentDidMount() {
    threeEntryPoint(this.threeRootElement);
  }


  render() {
    return (
      
    <div className="header-header" ref={element => this.threeRootElement = element} >
        gogogo
    </div>
    );
  }
}


{/* <input type="text" />
<Header /> 


<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

      </div>

*/}


export default App;
