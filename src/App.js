import React from 'react';
import logo from './logo.svg';
import './App.css';

const color1 = '#00cc00';
const color2 = '#FFD712';


export class ChildTest extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      name: 'Jason',
      colortop: color1,
      colorbottom: color2
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
    this.setState({
    colortop: newColourTop,
    colorbottom: newColourBottom
    });
  }

  render() {
    return (
      <div>
      <div className="ChildTest" style={{background: this.state.colortop}} >
        <h1>
          Hey my name is {this.props.name}!
        </h1>
        <select id="great-names" onChange={this.handleChange}>
          <option value="Jase">
            Jase
          </option>

          <option value="Jay Man">
            Jay Man
          </option>

          <option value="Chunks">
            Chunks
          </option>
        </select>

        <button className="childButton" onClick={this.changeColour}>
        Press Me
        </button>
      </div>

      <div className="App" style={{background: this.state.colorbottom}} >
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