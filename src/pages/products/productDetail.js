import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Topbar from '../../component/Topbar'
import { API_URL } from '../../helper/api'

 const ProductDetail = (props)=> {
  
     const [data, setData] = useState()

     useEffect(() => {
         getData()
     }, [])
     

     const getData = () => {
         axios.get(`${API_URL}?query=query{localizedFlatItem(id:"${props.match.params.id}}"){totalCount
      edges{node{id
        basicInfo {
          name
          shortDescription
          description
        }
        additionalInfo {
          heading
          numRows
          numColumns
          rows {
            objectType
            objectId
            columns
            id
          }
        }
        itemImagesSet {
          smallThumbUrl
          mediumThumbUrl
          fullsizeUrl
        }}}}}`
      )
      .then((res) => {
        setData(res.data.data.localizedFlatItem.edges[0].node);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(data);
  return (
    <div>
      <Topbar />
      <div className="container productDetail">
        <div className="row">
          <div className="col-lg-6">
            <img
              className="productDetail__image"
              src={data?.itemImagesSet[0]?.mediumThumbUrl}
              alt=""
            />
            <div className="row ml-3">
              <div className="col-8">
                <div className="row ">
                  <div className="col-4 ">
                    <img
                      className="productDetail__nextImage"
                      src="https://storage.googleapis.com/public_item_images/item_images/b35e983f-2723-4075-aecc-50cd1b4914ae_medium.jpg"
                      width="100px"
                      height="100px"
                      alt=""
                    />
                  </div>
                  <div className="col-4">
                    {" "}
                    <img
                      className="productDetail__nextImage"
                      src="https://storage.googleapis.com/public_item_images/item_images/b35e983f-2723-4075-aecc-50cd1b4914ae_medium.jpg"
                      width="100px"
                      height="100px"
                      alt=""
                    />
                  </div>
                  <div className="col-4">
                    {" "}
                    <img
                      className="productDetail__nextImage"
                      src="https://storage.googleapis.com/public_item_images/item_images/b35e983f-2723-4075-aecc-50cd1b4914ae_medium.jpg"
                      width="100px"
                      height="100px"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-4"></div>
            </div>
          </div>
          <div className="col-lg-6 mt-5">
            <h5 className="ml-5 mt-5 font-weight-bold d-inline ">
              {data?.basicInfo?.shortDescription}
            </h5>
            {/* <span className="ml-2">Muumimuki</span> */}
            <h6 style={{ fontSize: "2.4rem" }} className="display-4 ml-5 mt-2">
              {data?.additionalInfo[3]?.rows[0]?.columns[1]} (
              {data?.additionalInfo[3]?.rows[0]?.columns[0]})
            </h6>
            <div className="row productDetail__price mt-5">
              <div className="col-10">
                <h5 className="font-weight-bold productDetail__price">
                  {data?.additionalInfo[0]?.rows[0]?.columns[0]}
                </h5>
              </div>
              <div className="col-2"></div>
            </div>
            <button
              style={{ backgroundColor: "#A4B96D", color: "white" }}
              className="btn btn-lg ml-5  mt-3 productDetail__button px-3 py-3"
            >
              Lisaa Kokoelmaan
            </button>
            <p className="ml-5 mt-5">
              {data?.basicInfo?.description?.substring(0, 405) + "..."}
            </p>
          </div>
        </div>
        {/* Lisatiedot section */}
        <h2 className="mt-5 pt-5 ml-5 font-weight-bold">Lisatiedot</h2>
        <div className="row ml-5 mt-5">
          <div className=" col-md-3">
            <h4 className="font-weight-bold">Hinta-arvio</h4>
            <p>450EUR</p>
          </div>
          <div className="col-md-3">
            {" "}
            <h4 className="font-weight-bold">Hinta-arvio</h4>
            <p>450EUR</p>
          </div>
          <div className=" col-md-3">
            {" "}
            <h4 className="font-weight-bold">Hinta-arvio</h4>
            <p>450EUR</p>
          </div>
        </div>
        <div className="col-md-3"></div>
        {/* Tuoteversiot section */}
        <h2 className="mt-5 pt-5 ml-5 font-weight-bold">Tuoteversiot</h2>
        <div className="row ml-5 mt-5">
          <div className="col-lg-4">
            <div className="row">
              {" "}
              <div className="col-md-4">
                <img
                  src="https://storage.googleapis.com/public_item_images/item_images/b35e983f-2723-4075-aecc-50cd1b4914ae_medium.jpg"
                  width="100px"
                  height="100px"
                  alt=""
                />
              </div>
              <div className="col-md-8">
                <h4 className="font-weight-bold">VALMISTUSVUOSI</h4>
                <p>1996-2014</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <h4 className="font-weight-bold">LEIMA</h4>
            <p>Arabia Finland Kruunuleima Maalaava muumipeikko</p>
          </div>
          <div className="col-lg-2">
            <h4 className="font-weight-bold">ARVO(MINIMI) </h4>
            <p>43 EUR</p>
          </div>
          <div className="col-lg-2">
            <h4 className="font-weight-bold">ARVO(MAKSIMI) </h4>
            <p>75 EUR</p>
          </div>
        </div>
        <h2 className="mt-5 pt-5 ml-5 font-weight-bold">Hahmot</h2>
        <div className="row ml-5 mt-5">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-4">
                <img
                  src="https://storage.googleapis.com/public_item_images/item_images/b35e983f-2723-4075-aecc-50cd1b4914ae_medium.jpg"
                  width="100px"
                  height="100px"
                  alt=""
                />
                <h6 className="font-weight-bold">Muumimamma</h6>
              </div>
              <div className="col-md-4">
                <img
                  src="https://storage.googleapis.com/public_item_images/item_images/b35e983f-2723-4075-aecc-50cd1b4914ae_medium.jpg"
                  width="100px"
                  height="100px"
                  alt=""
                />
                <h6 className="font-weight-bold">Muumimamma</h6>
              </div>
              <div className="col-md-4">
                <img
                  src="https://storage.googleapis.com/public_item_images/item_images/b35e983f-2723-4075-aecc-50cd1b4914ae_medium.jpg"
                  width="100px"
                  height="100px"
                  alt=""
                />
                <h6 className="font-weight-bold">Muumimamma</h6>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;