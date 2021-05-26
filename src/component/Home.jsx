import React, { Component } from 'react'

import { list } from '../helper/api'
import axios from 'axios'

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            offset: 0
        }
    }
    
    getData() {
        axios
          .get(
            `https://api.mukify.com/graphiql/?query=query{localizedFlatItem(id:%20%22%22searchString: "", offset: ${this.state.offset}, first:20){edges{node{id
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
            this.setState({ data: res.data.data.localizedFlatItem.edges, offset : this.state.offset +1 });
          })
          .catch((err) => {
            console.log(err.message);
          });
    }

    componentDidMount() {
        this.getData()
    }
    

    render() {
        const {data, offset} =  this.state
        console.log(offset)
        return (
          <div className="row">
                 {data.map(nod => {
                return (
                  <div className="col-md-3 col-sm-6 col-xm-1 col-lg-3" key={nod.node.id}>
                      <img
                        className="card-img-top"
                        src={nod.node.itemImagesSet[0].mediumThumbUrl}
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <small className="text-muted">
                          {nod.node.basicInfo.name}
                        </small>
                        <h5 className="card-title">
                          {nod.node.basicInfo.shortDescription}
                        </h5>
                       
                        <p className="card-text"></p>
                      </div>
                    
                   
                  </div>
                );
                         })}
          </div>
        );
    }
}
