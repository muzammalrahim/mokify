import React, { useState, useEffect } from 'react';
import '../styling/style.scss'
import { Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import logo from '../assets/logo.svg'
import {FaSearch,FaUser, FaChevronLeft} from "react-icons/fa";
import Camera from '../assets/camera.png'
import { Link } from 'react-router-dom';


export default function Topbar() {
    const [user, setUser] = useState(false);

    const dropDownmenu = (event) => {
      event.preventDefault()
         setUser(!user)
    }

    return (
      <>
        {/* <div className="top-bar pt-1">
           <p>Luo oma kokoelmasi ja olet aina ajan tasalla sen arvosta!<span> Rekisteröidy tästä</span></p>
        </div>
        <Navbar className="navbar-custom pt-5 col-md-12 col-sm-12 col-xs-12" style={{position:"fixed",top:"0",zIndex:"10",backgroundColor:"rgba(255,255,255,1)",}} collapseOnSelect expand="lg">
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
        
        </Navbar> */}

        <div className="top-bar pt-1">
          <p>
            Luo oma kokoelmasi ja olet aina ajan tasalla sen arvosta!
            <span> Rekisteröidy tästä</span>
          </p>
        </div>
        <Navbar className="navbar-custom pt-5 col-md-12 col-sm-12 col-xs-12" style={{position:"fixed",top:"0",zIndex:"10",backgroundColor:"rgba(255,255,255,1)",}} collapseOnSelect expand="lg">
            <Navbar.Brand className="custom-width col-md-3 col-sm-3 col-xs-3">
        <div className="header container-fluid mr-2">
            <div className="logo">
            <span className="mr-1 FaChevronLeftDisplayOnLargeScreen">
                    <FaChevronLeft  color="black"/>
            </span>
            <span className="mr-1 FaChevronLeftDisplaySmallScreen">
                    <FaChevronLeft size="14px" color="black"/>
            </span>

                <img className="applyOnXsScreen" src={logo} alt="mukify"></img>
            </div>
            </div>
            </Navbar.Brand>
            <Navbar.Toggle className="mr-5" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify" id="responsive-navbar-nav">
        <div className="tabs">
        <span className="search-area">
            <a className="search" href=""><FaSearch color="black" /></a>
            <a className="" style={{border:"none"}} href=""><img className="" src={Camera} alt="loading"></img></a>
            </span>
            <a className="pl-4" href="">Kirjaudu sisään</a>



        <button className="tab-btn ml-2">Rekisteröidy</button>
        </div>
        </Navbar.Collapse>
        <div>
            {/* mobile topbar */}
        <div className="tabs-mob">
        <span className="search-area">
            <a className="search" href=""><FaSearch  color="black"/></a>
            <a className="border-left" href=""><img style={{border:"none"}} className="" src={Camera} alt="loading"></img></a>
            <a className="userIcon" href=""
            onClick={dropDownmenu}
            ><FaUser color="black"/></a>
            </span>

        </div>

        </div>
        <div style={{marginTop:"18px"}} className={`dropdownPosition  ${user ? "openUser" : "closeUser"}`}>
        <p className="" href="">Kirjaudu sisään</p>
        <button className="tab-btnSmall ml-2">Rekisteröidy</button>
        </div>
        {/* mobile topbar */}
        
        </Navbar>

        </>
    )
}