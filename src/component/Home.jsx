import React, { Component } from "react";
import axios from "axios";
import rightOffer from "../assets/rightOffer.svg";
import { Row, Col, Image, Spinner } from "react-bootstrap";
import loading from "../assets/loading.png";
import CustomizedAccordions from "../pages/products/Sidebar";
import SimpleDialog from "../pages/products/MobileSidebar";
import { Link } from "react-router-dom";
import settings from "../assets/settings.svg";
import down from "../assets/down.svg";
import Topbar from "./Topbar";
import Footer from "./Footer";
import { API_URL } from "../helper/api";
import { debounce } from "lodash";
import { connect } from "react-redux";
import NotificationBar from "./NotificationBar";

class Header extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      offset: 0,
      moreData: [],
      apiLength: 0,
      start: 9,
      minYear: 0,
      maxYear: 0,
      minPrice: 0,
      maxPrice: 1000,
      colorFilter: [],
      characterFilter: [],
      year: [1800, new Date().getFullYear()],
      yearCount: 0,
      price: [0, 5],
      priceCount: 0,
      color: [],
      colorCount: 0,
      character: [],
      characterCount: 0,
      totalCount: 0,
      totalFilter: 0,
      filterCall: false,
      status: false,
      // isLogedin: false,
    };
    this.changeFilters = debounce(this.changeFilters, 2000);
  }

  // componentDidUpdate() {
  //   if (this.state.totalFilter === 0) {
  //     this.getData();
  //   }
  // }

  componentWillMount() {
    window.addEventListener("scroll", this.loadMore);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.loadMore);
  }
  url = () =>
    `${
      process.env.REACT_APP_BACKEND_URL
    }?query=query{localizedFlatItem(id:%20%22%22searchString: "", offset: ${
      this.state.offset
    }, first:${
      this.state.apiLength <= 20 && this.state.apiLength >= 1
        ? this.state.apiLength
        : this.state.start
    }){totalCount
      priceMin
      priceMax
      manufacturingYearMin
      manufacturingYearMax
        colorFilters{
          id
            name
            count
        }
          characterFilters {
            id
            name
            count
          }
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
        }}}}}`;
  getData = () => {
    let url = this.url();
    axios
      .get(url)
      .then((res) => {
        this.setState({
          data: res.data.data.localizedFlatItem.edges,
          offset: this.state.offset + 20,
          start: 20,
          apiLength: res.data.data.localizedFlatItem.totalCount - 9,
          minPrice: res.data.data.localizedFlatItem.priceMin,
          maxPrice: res.data.data.localizedFlatItem.priceMax,
          minYear: res.data.data.localizedFlatItem.manufacturingYearMin,
          maxYear: res.data.data.localizedFlatItem.manufacturingYearMax,
          colorFilter: res.data.data.localizedFlatItem.colorFilters,
          characterFilter: res.data.data.localizedFlatItem.characterFilters,
          // price: [res.data.data.localizedFlatItem.priceMin, res.data.data.localizedFlatItem.priceMax],
          // year: [res.data.data.localizedFlatItem.manufacturingYearMin, res.data.data.localizedFlatItem.manufacturingYearMax]
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  loadMore = () => {
    const { offset, start } = this.state;
    let url = this.url();
    if (
      Math.ceil(window.innerHeight + document.documentElement.scrollTop) ===
        document.scrollingElement.scrollHeight &&
      this.state.apiLength > 0
    ) {
      axios
        .get(url)
        .then((res) => {
          let data = this.state.data;
          let newData = res.data.data.localizedFlatItem.edges;
          let totalData = data.concat(newData);
          this.setState({
            data: totalData,
            offset: this.state.offset + 20,
            apiLength: this.state.apiLength - 20,
          });
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  handleChangeColor = (e) => {
    let { color, colorCount, totalFilter } = this.state;
    if (color.find((el) => el === '"' + e.target.id + '"')) {
      this.setState({
        color: color.filter((ele) => ele !== '"' + e.target.id + '"'),
        colorCount: colorCount - 1,
        totalFilter: totalFilter - 1,
        filterCall: true,
      });
      this.changeFilters();
    } else {
      this.setState({
        color: [...color, '"' + e.target.id + '"'],
        colorCount: colorCount + 1,
        apiLength: 0,
        totalFilter: totalFilter + 1,
        filterCall: true,
      });
      this.changeFilters();
    }
  };
  handleChangeCharacter = (e) => {
    let { character, characterCount, totalFilter } = this.state;
    if (character.find((el) => el === '"' + e.target.id + '"')) {
      this.setState({
        character: character.filter((ele) => ele !== '"' + e.target.id + '"'),
        characterCount: characterCount - 1,
        totalFilter: totalFilter - 1,
        filterCall: true,
      });
      this.changeFilters();
    } else {
      // this.changeFilters();
      this.setState({
        character: [...character, '"' + e.target.id + '"'],
        characterCount: characterCount + 1,
        apiLength: 0,
        totalFilter: totalFilter + 1,
        filterCall: true,
      });
      this.changeFilters();
    }
  };

  componentDidMount() {
    this.getData();
    if (localStorage.getItem("token")) {
      this.setState({ status: true });
    } else {
      this.setState({ status: false });
    }
  }
  changeRange = (event, newValue) => {
    const { totalFilter } = this.state;
    const price = newValue;
    this.setState({ price, apiLength: 0, priceCount: 1, filterCall: true });
    this.changeFilters();
  };
  changeYear = (event, newValue) => {
    const year = newValue;
    this.setState({ year, apiLength: 0, yearCount: 1, filterCall: true });
    this.changeFilters();
  };

  changeFilters = () => {
    const { year, price, character, color } = this.state;
    axios
      .get(
        `${API_URL}?query=query{localizedFlatItem(manufacturingYearGte:${
          year[0]
        },manufacturingYearLte:${year[1]},${
          price[1] == 5 ? "" : "priceLte:" + price[1]
        }, ${character.length > 0 ? "characterId:[" + character + "]" : ""} ${
          color.length > 0 ? "colorId:[" + color + "]" : ""
        })
  {
    totalCount
      edges{
        node{
        id
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
        }
      }
      }
}
}
      `
      )
      .then((res) => {
        const { data } = this.state;

        this.setState({
          data: res.data.data.localizedFlatItem.edges,
          filterCall: false,
        });
      })
      .catch((err) => {
        this.setState({ filterCall: false });
        console.log(err);
      });
  };

  render() {
    const {
      data,
      price,
      year,
      filterCall,
      status,
      priceCount,
      yearCount,
      totalFilter,
      apiLength,
      minPrice,
      maxPrice,
      minYear,
      maxYear,
      characterFilter,
      colorFilter,
      color,
      colorCount,
      characterCount,
    } = this.state;
    console.log("status value of local storage", status);
    return (
      <>
        {this.props.isLogedin && <NotificationBar />}
        <Topbar />
        <div className="products product-inner container mt-2 col-sm-12 pl-5 pr-5">
          {status ? (
            ""
          ) : (
            <div className="headingHomeDisplay text-center mb-5">
              <h1>Mikä on</h1>
              <h1>muumikokoelmani arvo?</h1>
              <button className="heading-home-btn mt-3">
                Tee oma kokoelma
              </button>
            </div>
          )}
          <div className="filters container filtersContainerDisplay col-sm-12 ">
            <hr />
            <div className="row">
              <div className="custom-width filters-left col-sm-6 col-xs-6">
                <div>
                  Rajaukset
                  <span className="filter-count">
                    <img src={settings}></img>
                  </span>
                  <span className="notify-fill">{totalFilter}</span>
                  <span className="ml-3">{data.length} tuotetta</span>
                </div>
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
          <Row>
            <Col xs="12" md="3">
              <div className="">
                <div className="mobile-filter">
                  <SimpleDialog
                    changeRange={this.changeRange}
                    changeYear={this.changeYear}
                    changeCharacter={this.handleChangeCharacter}
                    characterCount={characterCount}
                    changeColor={this.handleChangeColor}
                    color={color}
                    colorCount={colorCount}
                    year={year}
                    price={price}
                    priceMin={minPrice}
                    priceMax={maxPrice}
                    yearMin={minYear}
                    yearMax={maxYear}
                    colorFilter={colorFilter}
                    characterFilter={characterFilter}
                    priceCount={priceCount}
                    yearCount={yearCount}
                  />
                </div>
                <CustomizedAccordions
                  changeRange={this.changeRange}
                  changeYear={this.changeYear}
                  changeCharacter={this.handleChangeCharacter}
                  characterCount={characterCount}
                  changeColor={this.handleChangeColor}
                  color={color}
                  colorCount={colorCount}
                  year={year}
                  price={price}
                  priceMin={minPrice}
                  priceMax={maxPrice}
                  yearMin={minYear}
                  yearMax={maxYear}
                  colorFilter={colorFilter}
                  characterFilter={characterFilter}
                  priceCount={priceCount}
                  yearCount={yearCount}
                />
              </div>
            </Col>

            <Col xs="12" md="12" lg="9">
              {filterCall && (
                <div className="loaderContainer">
                  <div class="text-center">
                    <div class="spinner-border" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                  </div>
                </div>
              )}
              <Row>
                {data.map((nod) => {
                  return (
                    <Col xs={12} lg={4} md={4} sm={6} key={nod.node.id}>
                      <Link to={`/product/${nod.node.id}`}>
                        <Image
                          className="product-image"
                          src={nod?.node?.itemImagesSet[0]?.mediumThumbUrl}
                        />
                        <p className="product-text">
                          {nod?.node?.basicInfo?.shortDescription}
                        </p>
                        <p className="product-subtext ">
                          {nod?.node?.basicInfo?.name}
                        </p>
                        <p className="product-price">
                          {nod.node.additionalInfo[0].rows[0].columns[0]}
                        </p>
                      </Link>
                    </Col>
                  );
                })}
              </Row>
              {apiLength > 0 && (
                <div className="loading mt-5 mb-5 container">
                  <img
                    className="mt-5 mb-4 spinner-loader"
                    src={loading}
                    alt="loading"
                  ></img>
                  <p>Scrollaa ladataksesi lisää</p>
                  <p>mukeja ({apiLength})</p>
                </div>
              )}
            </Col>
          </Row>
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { isLogedin: state.login.isLoggedIn };
};

export default connect(mapStateToProps)(Header);
