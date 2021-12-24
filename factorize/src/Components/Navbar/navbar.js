import React, { useState } from 'react';

import './navbar.css';
import {NavLink} from 'react-router-dom';
import logo from '../../pictures/logo.jpg';
import { Button } from 'bootstrap';

const Navbar = () => {
  
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
      <a className="navbar-brand text-info font-weight-bolder" href="/">
        <img src={logo} alt="Logo" width="100" height="50" className="vertical-align-middle" />
      </a>
      
      <button class="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse justify-content-end`} id="navbarsExample09">
        <a className="nav-link text-info border border-primary rounded px-md-2 mx-md-1" href="/learn">Learn How it Works</a>
        <a className="nav-link text-info border border-primary rounded px-md-2 mx-md-1" href="/about">Why myApp?</a>
        <a href="/contact" className="btn btn-sm btn-info nav-link text-white mx-md-2" >Contact Me</a> 
      </div>

    </nav>
  );
}

export default Navbar
