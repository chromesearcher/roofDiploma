import React, { Component } from "react";
import ReactDOM from "react-dom";

// import "./styles.css";

import threeEntryPoint from "./threejs/threeEntryPoint";


class MainR extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nRafters: "5",
      canvas1: null,
      L: "0",
      W: "0",
      La: "0",
      Wa: "0",
      H: "0",
      h: "0",
      text: ""
    };

    
    // window.onload = function() {
    //   var input = document.getElementById("inputL").focus();
    // }

    this.changeL = this.changeL.bind(this);
    this.changeW = this.changeW.bind(this);
    this.changeLa = this.changeLa.bind(this);
    this.changeWa = this.changeWa.bind(this);
    this.changeH = this.changeH.bind(this);
    this.changeh = this.changeh.bind(this);

    this.handleButton = this.handleButton.bind(this);
    const REACT_VERSION = React.version;
    //alert('React v. = ' + REACT_VERSION);
  }


  componentDidMount() {

    const inputL = document.getElementById("inputL");
    // alert('compDidMount: input1 = ' + input1.id);
    alert('Недопустимая длина дома');

    // const threeD = document.getElementById("threeD");
    // alert('compDidMount: threeD = ' + threeD.id);
    // alert('compDidMount: threeD.children = ' + threeD.children[0]);
    // threeD.removeChild(threeD.children[0]);

    // this.setState({
    //     canvas1: threeD//document.getElementById("threeD")
    // });

    // alert('compDidMount: canvas1 = ' + this.state.canvas1);
    // alert('compDidMount: this.threeRootElement = ' + this.threeRootElement);


    // inputL.focus();
    // inputL.selected = true;

    // TODO check that nRafters is ok (not a bitch string, but a proper number)
    // var n = parseInt(this.state.nRafters, 10);
    var r = threeEntryPoint(this.threeRootElement, 1200, 600, 400, 500, 300, 300);

   
    // alert(document.activeElement.tagName);
    
    // var printBlock = document.getElementById("printBlock");
    // printBlock.textContent += 'gogo\n2222';

    var l1 = 14;
    var l2 = 3;
    var l3 = 14;
    var l4 = 5.4;
    var l5 = 4.5;
    var l6 = 7;

    var n1 = 2;
    var n2 = 7;
    var n3 = 2;
    var n4 = 37;
    var n5 = 17*2;
    var n6 = 2;

    var S = 300;

    var step1 = 0.6;
    var step2 = 1.0;
    var step3 = 2;

    var textM = "Необходимо: \n";
    textM += n1 + " доски сечением 50х250 длиной " + l1 + " м (коньки)\n";
    textM += n2 + " досок сечением 50x100 длиной " + l2 + " м (стойки)\n";
    textM += n3 + " брусков сечением 150x150 длиной " + + l3 + " м (мауэрлаты)\n";
    textM += n4 + " досок сечением 50x200 длиной " + l4 + " м (стропила)\n";
    textM += n5 + " доски сечением 50x200 длиной " + l5 + " м (балки перекрытия)\n";
    textM += n6 + " досок сечением 50x200 длиной " + l6 + " м (ендовы)\n";
    textM += "\n";
    textM += S + " м2 металлочерепицы" + "\n"; 
    textM += "\n";
    textM += "Шаг стропил равен " + step1 + " м\n";
    textM += "Шаг балок перекрытия равен " + step2 + " м\n";
    textM += "Шаг стоек равен " + step3 + " м\n";    
    

    this.setState({
      text: textM 
    });
  }

  changeL(event) {
    this.setState({
      L: event.target.value
    });

    // alert('changeText handler: .children 0 = ' + document.body.children[0].children.length);
    // alert('changeText handler: .children 1 = ' + document.body.children[1].children[0].id);
    // alert('changeText handler: .children 2 = ' + document.body.children[2].hasChildNodes());
    // alert('changeText handler: .children 3 = ' + document.body.children[3]);
  }

  changeW(event) {
    this.setState({
      W: event.target.value
    });
  }

  changeLa(event) {
    this.setState({
      La: event.target.value
    });
  }

  changeW(event) {
    this.setState({
      W: event.target.value
    });
  }

  changeWa(event) {
    this.setState({
      Wa: event.target.value
    });
  }

  changeH(event) {
    this.setState({
      H: event.target.value
    });
  }

  changeh(event) {
    this.setState({
      h: event.target.value
    });
  }

  handleButton() {

    var printBlock = document.getElementById("printBlock");
    printBlock.textContent += 'gogo';

    // TODO check that nRafters is ok (not a bitch string, but a proper number)
    var L = parseInt(this.state.L, 10);
    var W = parseInt(this.state.W, 10);
    var La = parseInt(this.state.La, 10);
    var Wa = parseInt(this.state.Wa, 10);
    var H = parseInt(this.state.H, 10);
    var h = parseInt(this.state.h, 10);
    //alert('button handler: nRafters = ' + n);
    // alert('button handler: canvas1 = ' + this.state.canvas1);
    // this.state.canvas1.remove();
    const threeD = document.getElementById("threeD");
    // alert('button handler: threeD = ' + threeD.id);
    // threeD.parentElement.removeChild(threeD);
    threeD.removeChild(threeD.children[0]);
    threeEntryPoint(this.threeRootElement, L, W, La, Wa, H, h);
  }

  render() {
    return (
      <div>

        Снеговой регион:   
        <select name="snow" tabindex = "1" id="snow">
          <option value="1">I</option>
          <option value="2">II</option>
          <option value="3">III</option>
          <option value="4" >IV</option>
          <option value="5" >V</option>
          <option value="6" >VI</option>
          <option value="7" >VII</option>
          <option value="8" >VIII</option>
        </select>
        <br />

        Ветровой регион:    
        <select name="wind" tabindex = "2" id="wind">
          <option value="1">1а</option>
          <option value="2">1</option>
          <option value="3">2</option>
          <option value="4">3</option>
          <option value="5">4</option>
          <option value="6">5</option>
          <option value="7">6</option>
          <option value="8">7</option>
        </select>
        <br />


        <label htmlFor="name" id='inputL'>Длина дома(L):            </label>
        <input type="text" tabindex = "3" id="inputL" onChange={this.changeL} />
        <br />
         
        <label htmlFor="name" id='inputW'>Ширина дома(W):           </label>
        <input type="text" tabindex = "4" id="inputW" onChange={this.changeW} />
        <br />

        <label htmlFor="name" id='inputLa'>Длина пристройки (La):   </label>
        <input type="text" tabindex = "5" id="inputLa" onChange={this.changeLa} />
        <br />

        <label htmlFor="name" id='inputWa'>Ширина пристройки (Wa):  </label>
        <input type="text" tabindex = "6" id="inputWa" onChange={this.changeWa} />
        <br />

        <label htmlFor="name" id='inputH'>Высота дома (H):          </label>
        <input type="text" tabindex = "7" id="inputH" onChange={this.changeH} />
        <br />

        <label htmlFor="name" id='inputh'>Высота крыши (h):         </label>
        <input type="text" tabindex = "8" id="inputh" onChange={this.changeh} />
        <br />

        {/* <h3>{this.state.name}</h3> */}
        <button onClick={this.handleButton} tabindex = "9" id='but1'>Пересчитать крышу</button>
        <br />
        
        <div className="header-header"  tabindex = "0"  ref={element => this.threeRootElement = element} id='threeD'></div>
        <br />

        {/* <textarea rows="15" cols="40" name="textArea"></textarea> */}
        <textarea rows="30" cols="100" value={this.state.text} name="textArea">
        </textarea>
        <div id="printBlock"></div>
      </div>
    );
  }
}

export default MainR;