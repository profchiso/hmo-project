//jshint esversion: 6
import React from 'react';
import './Search.css';
const LocationSearch = () =>{
return(
  <div className="location-search-container centered">
    <form action="#" method="post">
      <div className="form-group row">
    <div className="col-lg-8">
      <input type="text" className="form-control" placeholder="Enter your prefferd search keyword"/>
   </div>
   <div className="col-lg-4">
    <div className="input-group mb-3">
        <select className="custom-select" id="sort" name="sort">
          <option defaultValue>Sort...</option>
          <option>By Price</option>
  </select>
  </div>
</div>
      </div>
    </form>
  </div>
);

};
export default LocationSearch;