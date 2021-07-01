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
         axios.get(`${API_URL}?query=query{localizedFlatItem(id:"${props.match.params}}"){totalCount         
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
        }}}}}`).then(res => {
            setData(res.data.data.localizedFlatItem.edges[0].node);
        }).catch(err => {
            console.log(err)
        });
     }
     
     console.log(data)
        return (
            <div>
                <Topbar />
                <div className="container">
                    <div className="row">
                        <div className="col-8"><img src={data?.itemImagesSet[0]?.mediumThumbUrl} /></div>
                        <div className="col-4">
                            <div >{data?.basicInfo?.shortDescription}</div>
                            <div >{data?.additionalInfo[3]?.rows[0]?.columns[1]}</div>
                            <div >{data?.additionalInfo[3]?.rows[0]?.columns[0]}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    
}
export default ProductDetail;