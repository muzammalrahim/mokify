import React from 'react'
import '../styling/style.scss'
import { Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import logo from '../assets/logo.png'
import {FaSearch} from "react-icons/fa";

export default function Topbar() {
    return (
        <>
        <div className="top-bar pt-1">
           <p>Luo oma kokoelmasi ja olet aina ajan tasalla sen arvosta!<span> Rekisteröidy tästä</span></p>
        </div>
        <Navbar className="pt-5 col-md-12 col-sm-12 col-xs-12" collapseOnSelect expand="lg">
            <Navbar.Brand className="custom-width col-md-3 col-sm-3 col-xs-3">
        <div className="header container-fluid ">
            <div className="logo">
                <img src={logo} alt="mukify"></img>
            </div>
            </div>
            </Navbar.Brand>
            <Navbar.Toggle className="mr-5" aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse className="justify" id="responsive-navbar-nav">
        <div className="tabs">
        <a href=""><FaSearch /></a>
        <a href="">Etsi tai tunnista valokuvasta</a>
        <a href="">Kirjaudu sisään</a>
        <button className="tab-btn ml-2">Rekisteröidy</button>
        </div>
        </Navbar.Collapse>
        
        </Navbar>
        {/* <Navbar className=" header container-fluid row col-sm-12" collapseOnSelect expand="lg" >
  <Navbar.Brand className="logo col-sm-6 col-md-6" href="#home"><img src={logo} alt="mukify"></img></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse className="tabs col-sm-6 col-md-6" id="responsive-navbar-nav">
  
    <Nav >
      <Nav.Link href=""><FaSearch /></Nav.Link>
      <Nav.Link href="">
      Etsi tai tunnista valokuvasta
      </Nav.Link>
      <Nav.Link href="">
      Kirjaudu sisään
      </Nav.Link>
      <Nav.Link href="">
      <button className="tab-btn ml-2">Rekisteröidy</button>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar> */}
        </>
    )
}
