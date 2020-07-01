import React from 'react';
import logo from './logo.svg';
import './App.css';

const color2 = '#000000';
const color1 = '#FFFFFF';
// const text = 'Dark Mode';	


export class ChildTest extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      name: 'Jason',
      colortop: color1,
      colorbottom: color2,
      text: 'Dark Mode'
    };

    this.handleChange = this.handleChange.bind(this);
    this.changeColour = this.changeColour.bind(this);
  }

  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
  }

  changeColour() {
    const newColourTop = this.state.colortop === color1 ? color2 : color1;
    const newColourBottom = this.state.colorbottom === color2 ? color1 : color2;
    const textValue = this.state.text === 'Dark Mode' ? 'Light Mode' : 'Dark Mode'
    this.setState({
    colortop: newColourTop,
    colorbottom: newColourBottom,
    text: textValue
    });
  }

  // if (this.state.colortop === color1) {
  // text = 'Light Mode';
  // } else {
  // text = 'Dark Mode';
  // }

  render() {
    return (
      <div>

      <div className="ChildTest" style={{background: this.state.colortop}} >
  
	      <button className="childButton" onClick={this.changeColour}>
	        {this.state.text}
	      </button>

	      <h1 style={{color: this.state.colorbottom}}>
	          Hey my name is {this.props.name}!
	      </h1>

	      <select id="great-names" onChange={this.handleChange}>
	          <option value="Jason">
	            Jason
	          </option>

	          <option value="Jay Man">
	            Jay Man
	          </option>

	          <option value="Jase">
	            Jase
	          </option>
	      </select>
      </div>

        
      

      <div className="App" style={{background: this.state.colorbottom, color: this.state.colortop}} >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open the Portal
        </a>
      </header>
    </div>
    </div>
    );
  }
}

export class NavBar extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<div className="mainNav" >
			  <a class="active" href="#home">Home</a>
			  <a href="#testing">Testing Ground</a>
			  <a href="#contact">Contact</a>
			  <a href="#about">About</a>
			</div>
		);
	}
}


// function App() {
//   return (
//     <div className="App" style={{background: this.state.colorbottom}}>
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Open the Portal
//         </a>
//       </header>
//     </div>
//   );
// }


// export default App;