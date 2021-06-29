import React, { Component } from 'react'
import '../styling/style.scss'
import Topbar from '../component/Topbar'
import Footer from '../component/Footer'
import settings from '../assets/settings.svg'
import down from '../assets/down.svg'
import Homes from '../component/Home'

export default class Home extends Component {
    render() {
        return (
          <div className="home-main">
            <div className="header=section">
              <Topbar />
            </div>
            <div className="products container mt-5 pt-2 col-sm-12">
              {/* <Products /> */}
              <Homes />
            </div>
            {/* <div className="loading mt-5 mb-5 container">
              <img className="mt-5 mb-4" src={loading} alt="loading"></img>
              <p>Scrollaa ladataksesi lisää</p>
              <p>mukeja (390)</p>
            </div> */}
            <div>
              <Footer />
            </div>
          </div>
        );
    }
}
