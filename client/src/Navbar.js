import React from 'react';

import './../node_modules/bootstrap/dist/css/bootstrap.min.css.map';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import './form.css';
import { NavLink } from 'react-router-dom';


function Menu()
{
    return(
    <>
    <div className="main1">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <form className="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>

  <div className="search1">
    <NavLink to="/Login" >Login</NavLink>
    <NavLink to="/Signup">Signup</NavLink>
   </div>
</nav>
</div>
</>
);
}

export default Menu;