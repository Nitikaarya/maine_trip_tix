import React from 'react';
import { Route, Link, Switch, HashRouter } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Header.css';

function Navi() {
  return (
    <HashRouter>
        <div className="header--fixed">
            <Navbar>
                <a href = '#home' className="headname">Maine</a>
                <a href = '#home' className="main"> Trip Tix</a> 
                <Nav href = '#home' className="mr-auto" style={{marginLeft:"23%"}}>
                  <li><a href = '#home' to="/" className ="nav-link">Home</a></li><br/>
                  <li><a href='#about' to="/about" className ="nav-link">About</a></li><br/>
                  <li><a href = '#services' to="/services" className="nav-link" >Services</a></li><br/>
                  <li><a href = '#pricing' to="/pricing" className ="nav-link">Pricing</a></li><br/>
                  <li><Link href = '#contact' to="/contact" className ="nav-link">Contact</Link></li>
                </Nav>
            </Navbar>        
        </div>
    </HashRouter>
  ); 
}

export default Navi;