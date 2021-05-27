import React from 'react'
import '../styling/style.scss'
import footerLogo from '../assets/footer-logo.png'
import { Row, Col} from "react-bootstrap";
import {FaArrowCircleRight} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";




export default function Footer() {
    return (
        <div className="footer-main mt-5">
            <div className="logo container">
                <Col>
                  <img className="mt-5 mb-5" src={footerLogo} alt="footer-logo"></img>
                </Col>
            </div>
            <div className="links container col-sm-12">
                <Row className="ml-2">
               <div className="col-sm-2">
                 <p>Suosituimmat</p>
                 <a href="">Etusivu</a>
                 <a href="">Muumit</a>
                 <a href="">Merkit</a>
                 <a href="">Kokoelmat</a>
                 <a href="">Arabia</a>
               </div>
               <div className="col-sm-2">
               <p>Merkit</p>
                 <a href="">Arabia</a>
                 <a href="">Iittala</a>
                 <a href="">Muumimukit</a>
                 <a href="">Arabia</a>
                 <a href="">Iittala</a>
                 <a href="">Muumimukit</a>
               </div>
               <div className="col-sm-2">
               <p>Valitse kieli</p>
                 <a href="">In english</a>
                 <a href="">Svenska</a>
               </div>
               <div className="col-sm-2">
               <p>Kokoelmat.fi</p>
                 <a href="">Tietoa meistä</a>
                 <a href="">Tietosuoja ja evästeet</a>
                 <a href="">Ota yhteyttä</a>
               </div>
               <div className="col-sm-4">
                   <p>Tilaa Kokoelmien uutiskirje</p>
                   <div className="footer-search pl-4 pr-4 pt-1 pb-1">
                       <p>Anna sähköpostiosoitteesi<span><FaArrowCircleRight /></span></p>
                   </div>
               </div>
               </Row>
               <Row className="ml-2 mt-5">
               <p className="copyright-text">Copyright Kokoelmat.fi 2021</p>
               </Row>
            </div>

        </div>
    )
}
