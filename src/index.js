import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.css';
// import App from './App';
import {ChildTest} from './App';
import {NavBar} from './App';
import {AboutPage} from './App';
import {HomePage} from './App';
import * as serviceWorker from './serviceWorker';



class ParentTest extends React.Component {

	constructor(props) {
    super(props);

    this.state = { name: 'Jason' };
    
    this.changeName = this.changeName.bind(this);
  }

   changeName(newName) {
    this.setState({
 		name: newName
    });
  }
 
  render() {
    return (
		<div>

			<ChildTest name={this.state.name} onChange={this.changeName} />

  		</div>

    );
  }
}

class Build extends React.Component {
	render() {
		return (
			<Router>
	        <div>
	          <NavBar />
	          <Route exact path="react-personal-web-page/" component={HomePage} />
	          <Route path="react-personal-web-page/testing" component={ParentTest} />
	          <Route path="react-personal-web-page/about" component={AboutPage} />
	        </div>
	      </Router>
			);
	}
}

ReactDOM.render(
  // <React.StrictMode>
    <Build />,
  // </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
