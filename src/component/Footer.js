import React from 'react'
import '../styling/style.scss'
import footerLogo from '../assets/footerLogo.svg'
import { Row, Col} from "react-bootstrap";
// import {FaArrowCircleRight} from "react-icons/fa";
import Insta from "../assets/ins.png";
import Facebook from "../assets/fb.png";
import RightArrow from '../assets/right.png'




export default function Footer() {
    return (
        <div className="footer-main mt-5 pl-5 pr-5">
            <div className="logo container ml-0">
                <Col>
                  <img className="mt-5 mb-5" src={footerLogo} alt="footer-logo"></img>
                </Col>
            </div>
            <div className="links container col-sm-12">
                <Row className="ml-2">
               <div className="col-sm-2 footerLinks">
                 <p class="font-weight-bold">Sosiaalinen media</p>
                 <a href="">Instagram</a>
                 <a href="">Facebook</a>
                 <a href="">Twitter</a>
                
               </div>
               <div className="col-sm-2 footerLinks">
               <p>Valitse Kieli</p>
                 <a href="">Suomeksi</a>
                 <a href="">English</a>
                 <a href="">Svenska</a>
                
               </div>
               <div className="col-sm-2 footerLinks">
               <p>Asiakaspalvelu</p>
                 <a href="">info@mukify.com</a>
                 <a href="">Ohjeet</a>
                 <a href="">Usein esitetyt kysymykset</a>
               </div>
               <div className="col-sm-2 footerLinks">
               <p>Mukify Oy</p>
                 <a href="">Tietoa meistä</a>
                 <a href="">Avoimet työpaikat</a>
                 <a href="">Tietosuojaseloste</a>
                 <a href="">Yhteystiedot</a>
               </div>
               <div className="col-sm-4 footerLinks">
                   <p>Tilaa uutiskirje</p>
                   <div className="footer-search pl-4 pr-4 pt-1 pb-1">
                       <p className="pt-1 linkAnna">Anna sähköpostiosoitteesi<span>
                       <img className="mt-2" src={RightArrow} alt=""></img>
                       </span></p>
                   </div>
                    <div className="footer-socials mt-5">
                      <span className="mr-3 fb"><img src={Facebook} alt="fb"></img></span>
                      <span className="insta"><img src={Insta} alt="insta"></img></span>
                    </div>
               </div>
               </Row>
               <Row className="ml-2 mt-5">
               <p className="copyright-text">© 2021 Mukify Oy</p>
               </Row>
            </div>

        </div>
    )
}
