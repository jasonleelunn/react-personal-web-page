import React from 'react';
import logo from './logo.svg';
import './App.css';

const color2 = '#000000';
const color1 = '#FFFFFF';


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


  render() {
    return (
      <div>

      <div className="ChildTest" style={{background: this.state.colortop}} >
  
	      <button className="childButton" onClick={this.changeColour}>
	        {this.state.text}
	      </button>

	      <h1 style={{color: this.state.colorbottom}}>
	          Hello, my name is {this.props.name}!
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
    

{/*    <div className="App" style={{background: this.state.colorbottom, color: this.state.colortop}} >
      <header className="App-header">
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>*/}

    </div>
    );
  }
}

export const HomePage = () => (
<div className="HomePage">
	<h1>Welcome!</h1>
	<img src={logo} className="App-logo" alt="logo" />
</div>
);

export const AboutPage = () => (
<div className="AboutPage">
	<h1>About Page</h1>
	<a> 
	This website is a personal project of mine, attempting to expand my programming knowledge
	using the JavaScript library 'React'. I would like build these pages with the notion of easy up-scaling
	to ensure all code written is to the highest standard of my personal ability.
	At the time of writing this, my plans for the content on this website are vague. 
	I want to become comfortable with the language, framework and features of Reactjs before adding any large amounts
	of my own personal content and other projects.
	</a>
</div>
);

export class NavBar extends React.Component {
	// constructor(props) {
	// 	super(props);

	// }

	render() {
		return (
			<div className="mainNav" >
			  <a class="active" href="react-personal-web-page/">Home</a>
			  <a href="react-personal-web-page/testing">Testing Ground</a>
			  <a href="react-personal-web-page/about">About</a>
			  <a href="https://github.com/jasonleelunn/react-personal-web-page">GitHub Repo</a>
			  <a href="https://linkedin.com/in/jasonleelunn">My LinkedIn</a>
			</div>
		);
	}
}



// export default App;