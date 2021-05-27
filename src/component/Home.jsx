import React, { Component } from 'react'
import axios from 'axios'
import rightOffer from "../assets/right-offer.png";
import { Row, Col, Image } from "react-bootstrap";

export default class Header extends Component {
  

  state = {
    data: [],
    offset:0,
  }

  componentWillMount() {
    window.addEventListener("scroll", this.loadMore);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.loadMore);
  }

   getData=()=> {
    axios
      .get(
        `https://api.mukify.com/graphiql/?query=query{localizedFlatItem(id:%20%22%22searchString: "", offset: ${this.state.offset}, first:8){edges{node{id
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
        this.setState({
          data: res.data.data.localizedFlatItem.edges,
          offset: this.state.offset + 1,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  loadMore = ()=> {
    if (
      Math.ceil(window.innerHeight + document.documentElement.scrollTop) ===
      document.scrollingElement.scrollHeight
    ) {
      axios
        .get(
          `https://api.mukify.com/graphiql/?query=query{localizedFlatItem(id:%20%22%22searchString: "", offset: ${this?.state?.offset ? this.state.offset : 1}, first:8){edges{node{id
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
          let data = this.state.data
          let newData = res.data.data.localizedFlatItem.edges;
          let totalData = data.concat(newData);
          this.setState({
            data: totalData,
            offset: this.state.offset + 1,
          });
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
    
  }
  
  componentDidMount() {
    this.getData();
  }

  render() {
    const { data, offset } = this.state;
    console.log(data, offset);
    return (
      <>
        <Row>
          {data.map((nod) => {
            return (
              <Col xs={12} lg={3} md={3} sm={6} key={nod.node.id}>
                <Image
                  className="product-image"
                  src={nod?.node?.itemImagesSet[0]?.mediumThumbUrl}
                />
                <p className="product-text">
                  {nod?.node?.basicInfo?.shortDescription}
                </p>
                <p className="product-subtext ">{nod?.node?.basicInfo?.name}</p>
                <p className="product-price">
                  {nod.node.additionalInfo[0].rows[0].columns[0]}
                </p>
              </Col>
            );
          })}
          <div className="load" onScroll={() => this.handleScroll()}></div>
        </Row>
        {/* {data.length >= 8 && (
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
        )} */}
      </>
    );
  }
}
