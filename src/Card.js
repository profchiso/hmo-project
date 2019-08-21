//jshint esversion:6
import React, {Component} from 'react';

class Card extends Component{
constructor(){
  super();
    this.state={
      provider:"Avon",
      location:"lagos",
      plans:['individual','family','couple'],
      price:30000
    };
}
  render(){
    return(
      <div className="row centered">
      <div className="col-md-3 col-sm-6">
        <div className="card ">
          <div className="card-header">
            <h1>{this.state.provider}</h1>
          </div>
          <div className="card-body">
            <p>price.. {this.state.price}</p>
            <p>location.. {this.state.location}</p>
            <p>plans.. {this.state.plans[0]}</p>
          </div>
        </div>
        </div>
      </div>
    );
  }
}
export default Card;