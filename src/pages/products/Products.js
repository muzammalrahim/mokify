import React, { Component } from 'react'
import Topbar from '../../component/Topbar'
import Footer from '../../component/Footer'
import settings from '../../assets/settings.svg'
import down from '../../assets/down.svg'
import Homes from '../../component/Home'
import loading from '../../assets/product1.png'
import CustomizedAccordions from '../products/Sidebar'
import SimpleDialog from '../products/MobileSidebar'



export default class Products extends Component {
    render() {
        return (
            <div className='products-main'>
                <div className="header=section">
                    <Topbar />
                </div>
                <div className="heading-home text-center mb-5">
                    <h1>Mikä on</h1>
                    <h1>muumikokoelmani arvo?</h1>
                    <button className="heading-home-btn mt-3">
                        Tee oma kokoelma
                    </button>
                </div>
                <div className="filters container col-sm-12 pl-5 pr-5">
                    <div className="row">
                        <div className="custom-width filters-left col-sm-6 col-xs-6">
                        <p>
                            Rajaa mukeja
                            <span>
                            <img src={settings}></img>
                            </span>
                            <span className="ml-3">9 tuotetta</span>
                        </p>
                        </div>
                        <div className="custom-width filters-right col-sm-6 col-xs-6">
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
                    {/* <Products /> */}
                    <div className="product-inner container mt-2 col-sm-12 pl-5 pr-5">
                        <div className="row">
                            <div className="col-sm-12 col-md-3">
                                <div className="mobile-filter">
                                    <SimpleDialog/>
                                </div>
                                
                                <CustomizedAccordions/>
                            </div>
                            <div className="col-lg-9 col-md-12 col-sm-12">
                                <div className="row">
                                    <div className="col-md-4 col-sm-12">
                                        <div className="loading product-info container">
                                            <img className="" src={loading} alt="loading"></img>
                                            <p className="title mb-2">Scrollaa ladataksesi lisää</p>
                                            <h5 className="heading mb-4">Vihreä (sarjakuva) (1990-1992)</h5>
                                            <h6 className="price">450€</h6>
                                        </div> 
                                    </div>
                                    <div className="col-md-4  col-sm-12">
                                        <div className="loading product-info container">
                                            <img className="" src={loading} alt="loading"></img>
                                            <p className="title mb-2">Scrollaa ladataksesi lisää</p>
                                            <h5 className="heading mb-4">Vihreä (sarjakuva) (1990-1992)</h5>
                                            <h6 className="price">450€</h6>
                                        </div>  
                                    </div>
                                    <div className="col-md-4 col-sm-12">
                                        <div className="loading product-info container">
                                            <img className="" src={loading} alt="loading"></img>
                                            <p className="title mb-2">Scrollaa ladataksesi lisää</p>
                                            <h5 className="heading mb-4">Vihreä (sarjakuva) (1990-1992)</h5>
                                            <h6 className="price">450€</h6>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    
                    </div>
                    {/* <Products /> */}
                <div>
                <Footer/>
                </div>
            </div>
        )
    }
}
