import React, { Component } from "react";
import ReactDOM from "react-dom";

// import "./styles.css";

import threeEntryPoint from "./threejs/threeEntryPoint";


class MainR extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nRafters: "5",
      canvas1: null
    };


    this.changeText = this.changeText.bind(this);
    this.handleButton = this.handleButton.bind(this);
    const REACT_VERSION = React.version;
    alert('React v. = ' + REACT_VERSION);
  }


  componentDidMount() {
    // TODO check that nRafters is ok (not a bitch string, but a proper number)
    var n = parseInt(this.state.nRafters, 10);
    threeEntryPoint(this.threeRootElement, n)

   
    
    
    const input1 = document.getElementById("input1");
    // alert('compDidMount: input1 = ' + input1.id);

    // const threeD = document.getElementById("threeD");
    // alert('compDidMount: threeD = ' + threeD.id);
    // alert('compDidMount: threeD.children = ' + threeD.children[0]);
    // threeD.removeChild(threeD.children[0]);

    // this.setState({
    //     canvas1: threeD//document.getElementById("threeD")
    // });

    // alert('compDidMount: canvas1 = ' + this.state.canvas1);
    // alert('compDidMount: this.threeRootElement = ' + this.threeRootElement);


    input1.focus();
  }

  changeText(event) {
    this.setState({
      nRafters: event.target.value
    });

    // alert('changeText handler: .children 0 = ' + document.body.children[0].children.length);
    // alert('changeText handler: .children 1 = ' + document.body.children[1].children[0].id);
    // alert('changeText handler: .children 2 = ' + document.body.children[2].hasChildNodes());
    // alert('changeText handler: .children 3 = ' + document.body.children[3]);
  }

  handleButton() {
    // TODO check that nRafters is ok (not a bitch string, but a proper number)
    var n = parseInt(this.state.nRafters, 10);
    alert('button handler: nRafters = ' + n);
    // alert('button handler: canvas1 = ' + this.state.canvas1);
    // this.state.canvas1.remove();
    const threeD = document.getElementById("threeD");
    // alert('button handler: threeD = ' + threeD.id);
    // threeD.parentElement.removeChild(threeD);
    threeD.removeChild(threeD.children[0]);
    threeEntryPoint(this.threeRootElement, n);
  }

  render() {
    return (
      <div>
        <label htmlFor="name" id='label1'>Enter Text here </label>
        <input type="text" id="input1" onChange={this.changeText} />
        {/* <h3>{this.state.name}</h3> */}
        <button onClick={this.handleButton} id='but1'>update 3D</button>
        

        <div className="header-header" ref={element => this.threeRootElement = element} id='threeD'></div>
      </div>
    );
  }
}

export default MainR;