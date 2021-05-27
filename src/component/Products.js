import React from 'react'
import { Row, Col} from "react-bootstrap";
import product1 from '../assets/product1.png'
import product2 from '../assets/product2.png'
import product3 from '../assets/product3.png'
import product4 from '../assets/product4.png'
import product5 from '../assets/product5.png'
import product6 from '../assets/product6.png'
import product7 from '../assets/product7.png'
import product8 from '../assets/product8.png'

export default function Products() {
    return (
        <div>
            <Row className="mb-5">
                <Col>
                <img src={product1} />
                <p className="product-text">Arabia muumimuki</p>
                <p className="product-subtext ">Arabia Muumimuki Niiskuneiti ja Runoilija, kesäkausimuki 2013</p>
                <p className="product-price">Hinta-arvio 25,40€</p>
                </Col>
                <Col>
                <img src={product2} />
                <p className="product-text">Arabia muumimuki</p>
                <p className="product-subtext">Arabia Muumimuki Vihreä (sarjakuva) (1990-1992)</p>
                <p className="product-price">Hinta-arvio 450€</p>
                </Col>
                <Col>
                <img src={product3} />
                <p className="product-text">Arabia muumimuki</p>
                <p className="product-subtext">Arabia Muumimuki Sininen, maalaavat muumit (1990-1996)</p>
                <p className="product-price">Hinta-arvio 160€</p>
                </Col>
                <Col>
                <img src={product4} />
                <p className="product-text">Arabia muumimuki</p>
                <p className="product-subtext">Arabia Muumimuki Roosa (sarjakuva) (1990-1992)</p>
                <p className="product-price">Hinta-arvio 450,40 €</p>
                </Col>
            </Row>
            <Row className="mb-5">
                <Col>
                <img src={product5} />
                <p className="product-text">Arabia muumimuki</p>
                <p className="product-subtext">Arabia Muumimuki Tumma keltainen, Pikku Myy (1991-1996)</p>
                <p className="product-price">165€</p>
                </Col>
                <Col>
                <img src={product6} />
                <p className="product-text">Arabia muumimuki</p>
                <p className="product-subtext">Arabia Muumimuki Tummansininen, Muumipappa (1991-1999)</p>
                <p className="product-price">150,00 €</p>
                </Col>
                <Col>
                <img src={product7} />
                <p className="product-text">Arabia muumimuki</p>
                <p className="product-subtext">Arabia Muumimuki Tummanvihreä, Muumipeikko (1991-1996)</p>
                <p className="product-price">160€</p>
                </Col>
                <Col>
                <img src={product8} />
                <p className="product-text">Arabia muumimuki</p>
                <p className="product-subtext">Arabia Muumimuki Muumipappa tuumiskelee (1999-2013)</p>
                <p className="product-price">25 €</p>
                </Col>
            </Row>
        </div>
    )
}
