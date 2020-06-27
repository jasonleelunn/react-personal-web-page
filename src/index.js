import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import {ChildTest} from './App';
import * as serviceWorker from './serviceWorker';



class Build extends React.Component {

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

ReactDOM.render(
  // <React.StrictMode>
    <Build />,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
