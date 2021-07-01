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

  console.log(props.match.params);
  return (
    <div>
      <Topbar />
      <div className="container productDetail">
        <div className="row">
          <div className="col-md-6">
            <img
              className="productDetail__image"
              src={data?.itemImagesSet[0]?.mediumThumbUrl}
              alt=""
            />
          </div>
          <div className="col-md-6 mt-5">
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
      </div>
    </div>
  );
};
export default ProductDetail;