import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Nav from "./Nav"
import "./Nav.css"
import Search from './Search';
import './Search.css';
import Card from './Card';
import './Card.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<div>
  <Nav />
  <Search/>
  <Card />
  </div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
