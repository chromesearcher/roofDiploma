import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import MainR from './MainR';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<MainR />, document.getElementById('root'));
registerServiceWorker();

// import React, { Component } from "react";
// import ReactDOM from "react-dom";

// // import "./styles.css";

// class CustomButton extends Component {
//   render() {
//     const { onPress, children } = this.props;

//     return (
//       <button type="button" onClick={onPress}>
//         before 
//         {children}
//         after
//       </button>
//     );
//   }
// }

// class ChangeInput extends Component {
//   handleEvent = () => {
//     alert("I was clicked");
//   };

//   render() {
//     return (
//       <div>
//         <CustomButton onPress={this.handleEvent}>Click on me</CustomButton>
//       </div>
//     );
//   }
// }

// export default ChangeInput;

// const rootElement = document.getElementById("root");
// ReactDOM.render(<ChangeInput />, rootElement);

// import React, { Component } from "react";
// import ReactDOM from "react-dom";

// // import "./styles.css";

// class ChangeInput extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: ""
//     };

//     this.changeText = this.changeText.bind(this);
//   }

//   changeText(event) {
//     this.setState({
//       name: event.target.value
//     });
//   }

//   render() {
//     return (
//       <div>
//         <label htmlFor="name">Enter Text here </label>
//         <input type="text" id="name" onChange={this.changeText} />
//         <h3>{this.state.name}</h3>
//       </div>
//     );
//   }
// }

// export default ChangeInput;

// const rootElement = document.getElementById("root");
// ReactDOM.render(<ChangeInput />, rootElement);

