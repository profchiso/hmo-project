//jshint esversion: 6
import React, {Component} from 'react';
import  logo from './logo.jpeg';
class Nav extends Component{
  render(){
return(
  <div className="nav-container">
    <nav className="navbar navbar-expand-lg navbar-light bg-dark nav-container">
  <a className="navbar-brand" href="/"><img className="img-fluid rounded" src={logo} alt="HMO"/></a>
  <h1 className="welcome-text">Health Compare</h1>
</nav>
  </div>
  );
}
};
export default Nav;