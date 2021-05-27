import React, { Component } from 'react'
import '../styling/style.scss'
import Topbar from '../component/Topbar'
import Footer from '../component/Footer'
import settings from '../assets/settings.png'
import down from '../assets/down.png'
import Products from '../component/Products'
import rightOffer from '../assets/right-offer.png'
import loading from '../assets/loading.png'
import Homes from '../component/Home'

export default class Home extends Component {
    render() {
        return (
          <div className="home-main">
            <div>
              <Topbar />
            </div>
            <div className="heading-home text-center mt-5 mb-5">
              <h1>Mikä on</h1>
              <h1>muumikokoelmani arvo?</h1>
              <button className="heading-home-btn mt-3">
                Tee oma kokoelma
              </button>
            </div>
            <div className="filters container col-sm-12">
              <div className="row">
                <div className="filters-left col-sm-6">
                  <p>
                    Rajaa mukeja
                    <span>
                      <img src={settings}></img>
                    </span>
                  </p>
                </div>
                <div className="filters-right col-sm-6">
                  <p className="text-right">
                    Uusin ensin{" "}
                    <span>
                      <img src={down}></img>
                    </span>
                  </p>
                </div>
              </div>
              <hr></hr>
            </div>
            <div className="products container mt-5 col-sm-12">
              {/* <Products /> */}
              <Homes />
            </div>
            <div className="products-offers container mt-5 mb-5 col-sm-12">
              <div className="row">
                <div className="left-offer mt-5 mb-5 pt-5 pb-5 pl-5 col-sm-6">
                  <h5 style={{ fontWeight: "800" }}>Tulossa!</h5>
                  <h2 style={{ fontWeight: "400" }}>
                    Tunnista muumimukit suoraan valokuvasta!
                  </h2>
                  <h5 className="pb-3" style={{ fontWeight: "600" }}>
                    Aloita kokoelmasi kerääminen valokuvaamalla olemassa olevat
                    aarteesi.
                  </h5>
                  <button>Kokeile</button>
                </div>
                <div
                  className="right-offer mt-5 mb-5 col-sm-5"
                  style={{ backgroundImage: `url(${rightOffer})` }}
                ></div>
              </div>
            </div>
            <Homes />
            <div className="loading mt-5 mb-5 container">
              <img className="mt-5 mb-4" src={loading} alt="loading"></img>
              <p>Scrollaa ladataksesi lisää</p>
              <p>mukeja (390)</p>
            </div>
            <div>
              <Footer />
            </div>
          </div>
        );
    }
}
