import React, { Component } from 'react'
import axios from 'axios'
import rightOffer from "../assets/rightOffer.svg";
import { Row, Col, Image, Spinner } from "react-bootstrap";
import loading from "../assets/loading.png";

export default class Header extends Component {
  state = {
    data: [],
    offset: 0,
    moreData: [],
    apiLength: 0,
    start:20,
  };

  componentWillMount() {
    window.addEventListener("scroll", this.loadMore);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.loadMore);
  }
  url =()=> `${process.env.REACT_APP_BACKEND_URL}?query=query{localizedFlatItem(id:%20%22%22searchString: "", offset: ${this.state.offset}, first:${this.state.apiLength<=20 && this.state.apiLength >=1 ? this.state.apiLength: this.state.start}){totalCount edges{node{id
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
        }}}}}`;
  getData = () => {
    let url = this.url()
    axios
      .get(url)
      .then((res) => {
        this.setState({
          data: res.data.data.localizedFlatItem.edges,
          offset: this.state.offset + 21,
          apiLength: res.data.data.localizedFlatItem.totalCount - 20,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  loadMore = () => {
    const { offset, start } = this.state
    console.log("offset loadmore ", offset, start)
    let url = this.url();
    if (
      Math.ceil(window.innerHeight + document.documentElement.scrollTop) ===
      document.scrollingElement.scrollHeight && this.state.apiLength > 0
    ) {
      axios
        .get(url)
        .then((res) => {
          let data = this.state.moreData;
          let newData = res.data.data.localizedFlatItem.edges;
          let totalData = data.concat(newData);
          this.setState({
            moreData: totalData,
            offset: this.state.offset +20,
            apiLength: this.state.apiLength - 20,
          });
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const { data, moreData, apiLength, offset, start } = this.state;
    console.log(apiLength, offset, start)
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
        </Row>
        <div className="products-offers container mt-5 mb-5 col-sm-12">
          <div className="row">
            <div className="left-offer mt-5 mb-5 pt-5 pb-5 pl-5 col-sm-12 col-xs-12 col-md-12 col-lg-6">
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
              className="right-offer mt-5 mb-5 col-md-12 col-sm-12 col-xs-12 col-lg-5">
                <img className="right-offer-img" src={rightOffer} alt="right-offer"></img>
              </div>
          </div>
        </div>
        <Row>
          {moreData.map((nod) => {
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
        </Row>
        {apiLength >0 &&<div className="loading mt-5 mb-5 container">
          {/* <Spinner animation="grow" role="status">
            <span className="sr-only">Loading...</span>
            <img className="mt-5 mb-4" src={loading} alt="loading"></img>
          </Spinner> */}
          <img className="mt-5 mb-4 spinner-loader" src={loading} alt="loading"></img>
          <p>Scrollaa ladataksesi lisää</p>
          <p>mukeja ({apiLength})</p>
        </div>}
      </>
    );
  }
}
