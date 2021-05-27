import React from 'react'
import '../styling/style.scss'
import logo from '../assets/logo.png'
import {FaSearch} from "react-icons/fa";

export default function Topbar() {
    return (
        <>
        <div className="top-bar pt-1">
           <p>Luo oma kokoelmasi ja olet aina ajan tasalla sen arvosta!<span> Rekisteröidy tästä</span></p>
        </div>
        <div className="header pt-5 pl-5 pr-5 container-fluid row col-sm-12">
            <div className="logo col-sm-6">
                <img src={logo} alt="mukify"></img>
            </div>
        <div className="tabs col-sm-6">
        <a href=""><FaSearch /></a>
        <a href="">Etsi tai tunnista valokuvasta</a>
        <a href="">Kirjaudu sisään</a>
        <button className="tab-btn ml-2">Rekisteröidy</button>
        </div>
        </div>
        </>
    )
}
