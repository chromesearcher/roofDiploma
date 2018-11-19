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
      L: "1200",
      W: "900",
      La: "400",
      Wa: "500",
      H: "300",
      h: "300",
      SR: "1",
      WR: "1",
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
    this.changeSR = this.changeSR.bind(this);
    this.changeWR = this.changeWR.bind(this);

    this.handleButton = this.handleButton.bind(this);
    const REACT_VERSION = React.version;
    //alert('React v. = ' + REACT_VERSION);
  }

  updateData = (value) => {
    this.setState({ name: value })
 }


  componentDidMount() {

    const inputL = document.getElementById("inputL");
    // alert('compDidMount: input1 = ' + input1.id);
    // alert('Недопустимая длина дома');

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

    var L = parseFloat(this.state.L);
    var W = parseFloat(this.state.W);
    var La = parseFloat(this.state.La);
    var Wa = parseFloat(this.state.Wa);
    var H = parseFloat(this.state.H);
    var h = parseFloat(this.state.h);

    var r = threeEntryPoint(this.threeRootElement, L, W, La, Wa, H, h, 10, 6);

   
    // alert(document.activeElement.tagName);
    
    // var printBlock = document.getElementById("printBlock");
    // printBlock.textContent += 'gogo\n2222';

    var l1 = 14;
    var l2 = 3;
    var l3 = 14;
    var l4 = 5.4;
    var l5 = 4.5;
    var l6 = 7;

    var l1_a = 12;
    var l2_a = 1.5;
    var l3_a = 4;
    var l4_a = 3.9;
    var l5_a = 5;

    var n1 = 1;
    var n2 = 7;
    var n3 = 2;
    var n4 = 37;
    var n5 = 17*2;
    var n6 = 2;

    var n1_a = 1;
    var n2_a = 1;
    var n3_a = 2;
    var n4_a = 12;
    var n5_a = 5;

    var S = 180;

    var step1 = 0.6;
    var step2 = 1.0;
    var step3 = 1.8;

    var textM = "Необходимо: \n";
    textM += n1 + " доска сечением 50х250 длиной " + l1 + " м (конек дома)\n";
    textM += n1_a + " доска сечением 50х250 длиной " + l1_a + " м (конек пристройки)\n";
    textM += n2 + " досок сечением 50x100 длиной " + l2 + " м (стойки основного дома)\n";
    textM += n2_a + " доска сечением 50x100 длиной " + l2_a + " м (стойка пристройки)\n";
    textM += n3 + " бруска сечением 150x150 длиной " +  l3 + " м (мауэрлаты дома)\n";
    textM += n3_a + " бруска сечением 150x150 длиной "  + l3_a + " м (мауэрлаты пристройки)\n";
    textM += n4 + " досок сечением 50x200 длиной " + l4 + " м (стропила дома)\n";
    textM += n4_a + " досок сечением 50x200 длиной " + l4_a + " м (стропила пристройки)\n";
    textM += n5 + " доски сечением 50x200 длиной " + l5 + " м (балки перекрытия дома)\n";
    textM += n5_a + " доски сечением 50x200 длиной " + l5_a + " м (балки перекрытия пристройки)\n";
    textM += n6 + " доски сечением 50x200 длиной " + l6 + " м (ендовы)\n";
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

    // var val = parseFloat(event.target.value);

    // if (val < 700 || val > 1400) {
    //   alert("Недопустимая длина крыши");
    // } else {
      this.setState({
        L: event.target.value
      });
    // }

    // alert('changeText handler: .children 0 = ' + document.body.children[0].children.length);
    // alert('changeText handler: .children 1 = ' + document.body.children[1].children[0].id);
    // alert('changeText handler: .children 2 = ' + document.body.children[2].hasChildNodes());
    // alert('changeText handler: .children 3 = ' + document.body.children[3]);
  }

  changeW(event) {

    // var val = parseFloat(event.target.value);

    // if (val < 600 || val > 1200) {
    //   alert("Недопустимая ширина крыши");
    // } else {
      this.setState({
        W: event.target.value
      });
    // }

  
  }

  changeLa(event) {
    // var val = parseFloat(event.target.value);

    // if (val < 300 || val > 600) {
    //   alert("Недопустимая длина пристройки");
    // } else {
      this.setState({
        La: event.target.value
      });
    // }

 
  }

  changeW(event) {
    // var val = parseFloat(event.target.value);

    // if (val < 300 || val > 600) {
    //   alert("Недопустимая ширина дома");
    // } else {
      this.setState({
        W: event.target.value
      });
    // }

  }

  changeWa(event) {
    // var val = parseFloat(event.target.value);

    // if (val < 300 || val > 600) {
    //   alert("Недопустимая ширина пристройки");
    // } else {
      this.setState({
        Wa: event.target.value
      });
    // }

    
  }

  changeH(event) {
    // var val = parseFloat(event.target.value);

    // if (val < 300 || val > 1000) {
    //   alert("Недопустимая высота дома");
    // } else {
      this.setState({
        H: event.target.value
      });
    // }
  }

  changeh(event) {
    // var val = parseFloat(event.target.value);

    // if (val < 200 || val > 900) {
    //   alert("Недопустимая высота крыши");
    // } else {
      this.setState({
        h: event.target.value
      });
    // }
  }

  changeSR(event) {
    // alert(event.target.value);
    this.setState({
      SR: event.target.value
    });
  }

  changeWR(event) {
    this.setState({
      WR: event.target.value
    });
  }

  

  handleButton() {

    var N = 10; // koef mashtab

    var L = parseFloat(this.state.L) / N;
    var W = parseFloat(this.state.W) / N;
    var La = parseFloat(this.state.La) / N;
    var Wa = parseFloat(this.state.Wa) / N;
    var H = parseFloat(this.state.H) / N;
    var h = parseFloat(this.state.h) / N;


    var val = parseFloat(this.state.L);

    if (val < 700 || val > 1400) {
      alert("Недопустимая длина крыши");
      return;
    } 


    var val = parseFloat(this.state.W);

    if (val < 600 || val > 1200) {
      alert("Недопустимая ширина крыши");
      return;
    } 

    var val = parseFloat(this.state.La);

    if (val < 300 || val > 600) {
      alert("Недопустимая длина пристройки");
      return;
    } 
    
    var val = parseFloat(this.state.Wa);

    if (val < 300 || val > 600) {
      alert("Недопустимая ширина пристройки");
      return;
    } 

    var val = parseFloat(this.state.H);

    if (val < 300 || val > 1000) {
      alert("Недопустимая высота дома");
      return;
    } 

    var val = parseFloat(this.state.h);

    if (val < 200 || val > 550) {
      alert("Недопустимая высота крыши");
      return;
    } 


    // var printBlock = document.getElementById("printBlock");
    // printBlock.textContent += 'gogo';

    // alert(this.state.WR);
    // alert(this.state.SR);

    // TODO check that nRafters is ok (not a bitch string, but a proper number)

    
    //alert('button handler: nRafters = ' + n);
    // alert('button handler: canvas1 = ' + this.state.canvas1);
    // this.state.canvas1.remove();
    const threeD = document.getElementById("threeD");
    // alert('button handler: threeD = ' + threeD.id);
    // threeD.parentElement.removeChild(threeD);
    threeD.removeChild(threeD.children[0]);


    var sr_index = this.state.SR;
    var wr_index = this.state.WR;

    var sr_value = 0;
    var wr_value = 0;

    switch(sr_index) {

      case 1:
        sr_value = 80;
        break;

      case 2:
        sr_value = 120;
        break;

      case 3:
        sr_value = 180;
        break;

      case 4:
        sr_value = 240;
        break;

      case 5:
        sr_value = 320;
        break;

      case 6:
        sr_value = 400;
        break;

      case 7:
        sr_value = 480;
        break;

      case 8:
        sr_value = 560;
        break;
    }

    switch(wr_index) {

      case 1:
        wr_value = 24;
        break;

      case 2:
        wr_value = 32;
        break;

      case 3:
        wr_value = 42;
        break;

      case 4:
        wr_value = 53;
        break;

      case 5:
        wr_value = 67;
        break;

      case 6:
        wr_value = 84;
        break;

      case 7:
        wr_value = 100;
        break;

      case 8:
        wr_value = 120;
        break;
    }

    var step_raft = 0.6;

    var load = sr_value + wr_value + 5;

    if (load < 120) {
      step_raft = 0.9;
    } else if (load < 250) {
      step_raft = 0.8;
    } else if (load < 400) {
      step_raft = 0.7;
    } else {
      step_raft = 0.65;
    }

    // alert (W/20);

    var step_ceil = 1;

    if (W / 20 < 3.5) {
      step_ceil = 1.8;
    } else if (W / 20 < 4.5) {
      step_ceil = 1.5;
    } else {
      step_ceil = 1;
    }

    threeEntryPoint(this.threeRootElement, L*N, W*N, La*N, Wa*N, H*N, h*N, step_ceil*N, step_raft*N);




    // threeEntryPoint(this.threeRootElement, L*N, W*N, La*N, Wa*N, H*N, h*N);

    

    var w_wall = 30 / N;
    var mauerlat_width = 15 / N;
    var mauerlat_thickness = 15 / N;

    var Lm_a = Wa + (w_wall - mauerlat_thickness);
    var Lm = L - w_wall*2; // длина мауэрлата дома

    var ceiling_width = 20 / N;
    var ceiling_thickness = 5 / N;

    var step_ceiling = step_ceil*N;//80 / N; // step of balok perekrytiya 0.6 - 1 m (60-100 sm)
    var ceiling_delta = 5 / N;// + ceiling_thickness / 2; // otstup from wall

    var Lceiling = W - 2*w_wall + mauerlat_thickness;

    var l = L / 2 - w_wall - ceiling_delta;
    var step = step_ceiling + ceiling_thickness;
    var nceiling = Math.floor( l / step ); //чтобы отбросить дробную часть
    // alert(nceiling);
    // alert(nceiling)

    nceiling = nceiling*4;

    var Lceiling_a = La - 2*w_wall + mauerlat_thickness;

    l = Wa - w_wall - ceiling_delta;
    step = step_ceiling + ceiling_thickness;
    var nceiling_a = Math.floor( l / step ); //чтобы отбросить дробную часть
    nceiling_a = nceiling_a + 1;

    var h_stand = h / N; // 300 300 / N; //

    var stand_width = 15 / N;
    var stand_thickness = 10 / N;

    var L_stand = h_stand;

    var step_stand = 180 / N; // step of stands < 2m (200 sm)

    var l = L / 2 - w_wall - ceiling_delta - ceiling_thickness;
    var step = step_stand + stand_width;
    var nstand = Math.floor( l / step ); //чтобы отбросить дробную часть

    var nstand_a = 1;

    var konek_width = 25 / N;
    var konek_thickness = 10 / N;
    var konek_addition = w_wall /2;

    var L_konek = L - w_wall*2 + konek_addition*2 ;

    var h = h_stand + mauerlat_width + konek_width;//300 / N; // hegth of main roof
    var w_rafter = 20 / N; // shirina doski (dimension 1) == rafter_width
    var rafter_thickness = 5 / N; // tolshina doski (dimension 2) == w_thickness
    var w_sves = 50 / N; 
    
    

    var x1 = W/2 - (w_wall - mauerlat_thickness) - konek_thickness / 2;
    var y1 = h - mauerlat_width;

    var x2 = W/2 + w_sves; //x
    var y2 = (y1 / x1) * x2;

    var l2 = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));// watch the eskiz
    var w2 = (l2 * w_rafter) / x2;

    var y3 = (y1 / x1) * konek_thickness;
    var y4 = y2 - y3 - h;

    var zapil = w2 / 3;

    var Lrafter = l2;

    var step_rafter = step_raft*N;//60 / N; // step of stands < 2m (200 sm)

    var l = (L / 2 - w_wall - ceiling_delta - ceiling_thickness - rafter_thickness) - (La / 2 + w_sves + rafter_thickness);
    var step = step_rafter + rafter_thickness;
    var nrafters = Math.floor( l / step ); //чтобы отбросить дробную часть


    const nangle = 4;
    const nend = 4;
    const ncentral = 1; 
    nrafters = nrafters*4 + nangle + ncentral + nend;
    
    var x1_a = La/2 - (w_wall - mauerlat_thickness) - konek_thickness / 2;
    var y1_a = (y1 / x1) * x1_a;

    var x2_a = La/2 + w_sves;
    var y2_a = (y1 / x1) * x2_a;

    var l2_a = Math.sqrt(Math.pow(x2_a, 2) + Math.pow(y2_a, 2));// watch the eskiz
    var w2_a = w2;

    var h_a = y1_a + mauerlat_width;
    var h_stand_a = h_a - (mauerlat_width + konek_width);

    var y3_a = y3;
    // var y4_a = y2_a - y3_a - h_a;
    // alert(y4_a);
    var y4_a = y4;
    // alert(y4_a);

    var step_rafter_a = 60 / N; // step of 

    var l = (W/2 + Wa - w_wall - ceiling_delta - ceiling_thickness - rafter_thickness) - (x2 + rafter_thickness);
    var step = step_rafter_a + rafter_thickness;
    var nrafters_a = Math.floor( l / step ); //чтобы отбросить дробную часть

    nrafters_a = nrafters_a*2 + 4;
    var Lrafter_a = l2_a;

    var l_konek_a = W/2 + Wa - w_wall + konek_addition - stand_thickness / 2;

    var l_stand_a = h_stand_a;


    ///////////

    var step_nar = 60 / N; // fix this

    var l = La / 2 + w_sves - rafter_thickness / 2;
    var step = step_nar + rafter_thickness;
    var nnaroz = Math.floor( l / step ); //чтобы отбросить дробную часть

    // nnaroz = nnaroz*6;

    /////////////
    var y_central = y1 + y3 - h_stand_a - konek_width + w2 - zapil;
    var x_central = (x1 / y1) * y_central;

    var w3 = (x1 / y1) * w2;

    var y_diag = y2 + w2 - y_central;
    var k1 = x2_a - konek_thickness / 2;
    var x_diag =  Math.sqrt(Math.pow(k1, 2) + Math.pow(x2 - x_central, 2));

    var alpha = Math.atan((x2 - x_central) / (k1));

    var l_endova = Math.sqrt(Math.pow(y_diag, 2) + Math.pow(x_diag, 2));

    var S = L*Lrafter*2 + La*Lrafter_a*2;

    // var step1 = 0.6;
    // var step2 = 1.0;


    

    

    var textM = "Необходимо: \n";
    textM += 1 + " доска сечением 50х250 длиной " + (L_konek/N).toFixed(2) + " м (конек дома)\n";
    textM += 1 + " доска сечением 50х250 длиной " + (l_konek_a/N).toFixed(2) + " м (конек пристройки)\n";
    textM += nstand_a + " досок сечением 50x100 длиной " + (L_stand).toFixed(2) + " м (стойки основного дома)\n";
    textM += 1 + " доска сечением 50x100 длиной " + (L_stand / 2.1).toFixed(2) + " м (стойка пристройки)\n"; // fix
    textM += 2 + " бруска сечением 150x150 длиной " + (Lm/N).toFixed(2) + " м (мауэрлаты дома)\n";
    textM += 2 + " бруска сечением 150x150 длиной "  + (Lm_a/N).toFixed(2) + " м (мауэрлаты пристройки)\n";
    textM += (nrafters + nnaroz*4) + " досок сечением 50x200 длиной " + (Lrafter/N).toFixed(2) + " м (стропила дома)\n";
    textM += (nrafters_a + nnaroz*2) + " досок сечением 50x200 длиной " + (Lrafter_a/N).toFixed(2) + " м (стропила пристройки)\n";
    textM += nceiling + " доски сечением 50x200 длиной " + (Lceiling/N).toFixed(2) + " м (балки перекрытия дома)\n";
    textM += nceiling_a + " досок сечением 50x200 длиной " + (Lceiling_a/N).toFixed(2) + " м (балки перекрытия пристройки)\n";
    textM += 2 + " доски сечением 50x200 длиной " + (l_endova/N).toFixed(2) + " м (ендовы)\n";
    textM += "\n";
    textM += (S/(N*N)).toFixed(1) + " м2 металлочерепицы" + "\n"; 
    textM += "\n";
    textM += "Шаг стропил равен " + step_raft + " м\n";
    textM += "Шаг балок перекрытия равен " + step_ceil + " м\n";
    textM += "Шаг стоек равен " + step_stand/N + " м\n";  
    
    this.setState({
      text: textM 
    });

  }

  render() {
    return (
      <div>

        Снеговой регион:   
        <select name="snow" tabindex = "1" id="snow" onChange={this.changeSR}>
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
        <select name="wind" tabindex = "2" id="wind" onChange={this.changeWR}>
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


        <label htmlFor="name" id='inputL'>Длина дома(L), см [700-1400]:            </label>
        <input type="text" tabindex = "3" id="inputL" onChange={this.changeL} />
        <br />
         
        <label htmlFor="name" id='inputW'>Ширина дома(W), см [600-1200]:           </label>
        <input type="text" tabindex = "4" id="inputW" onChange={this.changeW} />
        <br />

        <label htmlFor="name" id='inputLa'>Длина пристройки (La), см [300-600]:   </label>
        <input type="text" tabindex = "5" id="inputLa" onChange={this.changeLa} />
        <br />

        <label htmlFor="name" id='inputWa'>Ширина пристройки (Wa), см [300-600]:  </label>
        <input type="text" tabindex = "6" id="inputWa" onChange={this.changeWa} />
        <br />

        <label htmlFor="name" id='inputH'>Высота дома (H), см [300 - 1000]:          </label>
        <input type="text" tabindex = "7" id="inputH" onChange={this.changeH} />
        <br />

        <label htmlFor="name" id='inputh'>Высота крыши (h), см [200 - 550]:         </label>
        <input type="text" tabindex = "8" id="inputh" onChange={this.changeh} />
        <br />

        {/* <h3>{this.state.name}</h3> */}
        <button onClick={this.handleButton} tabindex = "9" id='but1'>Пересчитать крышу</button>
        <br />
        
        <div className="header-header" updateData={this.updateData} tabindex = "0"  ref={element => this.threeRootElement = element} id='threeD'></div>
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