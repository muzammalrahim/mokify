import React, { useState, useEffect } from "react";
import "../styling/style.scss";
import { Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import logo from "../assets/logo.svg";
import { FaSearch, FaUser, FaChevronLeft } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import Camera from "../assets/camera.png";
import { Link } from "react-router-dom";

export default function Topbar() {
  const [user, setUser] = useState(false);
  const [status, setStatus] = useState(false);

  const dropDownmenu = (event) => {
    event.preventDefault();
    setUser(!user);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setStatus(true);
    }
  });

  const handleLogout = () => {
    localStorage.removeItem("token");
    setStatus(false);
  };

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
      <Navbar
        className="navbar-custom mb-5 pt-5 col-md-12 col-sm-12 col-xs-12"
        style={{
          position: "sticky",
          top: "0",
          zIndex: "10",
          backgroundColor: "rgba(255,255,255,1)",
        }}
        collapseOnSelect
        expand="lg"
      >
        <Navbar.Brand className="custom-width col-md-3 col-sm-3 col-xs-3">
          <div className="header container-fluid ">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="mukify"></img>
              </Link>
            </div>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle className="mr-5" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify" id="responsive-navbar-nav">
          <div className="tabs">
            <span className="search-area">
              <a className="search" href="">
                <FaSearch color="black" />
              </a>
              <a className="" style={{ border: "none" }} href="">
                <img className="" src={Camera} alt="loading"></img>
              </a>
            </span>
            {status === true ? (
              <>
                <span className="usernameSpan">
                  <AiOutlineUser />
                  Username
                </span>
              </>
            ) : (
              <>
                <Link className="pl-4" to="/login">
                  Kirjaudu sisään
                </Link>

                <button className="tab-btn ml-2">
                  <Link to="/register">Rekisteröidy</Link>
                </button>
              </>
            )}
          </div>
        </Navbar.Collapse>
        <div>
          {/* mobile topbar */}
          <div className="tabs-mob">
            <span className="search-area">
              <a className="search" href="">
                <FaSearch color="black" />
              </a>
              <a className="border-left" href="">
                <img
                  style={{ border: "none" }}
                  className=""
                  src={Camera}
                  alt="loading"
                ></img>
              </a>
              <a className="userIcon" href="" onClick={dropDownmenu}>
                <FaUser color="black" />
              </a>
            </span>
          </div>
        </div>
        <div
          style={{ marginTop: "18px" }}
          className={`dropdownPosition  ${user ? "openUser" : "closeUser"}`}
        >
          <Link className="" to="/login">
            Kirjaudu sisään
          </Link>
          <button className="tab-btnSmall ml-2">
            <Link to="/register">Rekisteröidy</Link>
          </button>
        </div>
        {/* mobile topbar */}
      </Navbar>
    </>
  );
}
