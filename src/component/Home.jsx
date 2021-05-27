import React, { Component } from 'react'
import { list } from '../helper/api'
import axios from 'axios'

export default class Header extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: [],
  //     offset: 0,
  //   };
  // }

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
    console.log(window.innerHeight + document.documentElement.scrollTop);
    console.log(document.scrollingElement.scrollHeight);
    if (
      Math.ceil(window.innerHeight + document.documentElement.scrollTop) ===
      document.scrollingElement.scrollHeight
    ) {
      axios
        .get(
          `https://api.mukify.com/graphiql/?query=query{localizedFlatItem(id:%20%22%22searchString: "", offset: ${this?.state?.offset ? this.state.offset : 1}, first:20){edges{node{id
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
  handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return this.loadMore();
    console.log("Fetch more list items!");
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    const { data, offset } = this.state;
    console.log(data, offset);
    return (
      <div className="row">
        {data.map((nod) => {
          return (
            <div
              className="col-md-3 col-sm-6 col-xm-1 col-lg-3"
              key={nod?.node?.id}
            >
              <img
                className="card-img-top"
                src={nod?.node?.itemImagesSet[0]?.mediumThumbUrl}
                alt="Card image cap"
              />
              <div className="card-body">
                <small className="text-muted">
                  {nod?.node?.basicInfo?.name}
                </small>
                <h5 className="card-title">
                  {nod?.node?.basicInfo?.shortDescription}
                </h5>

                <p className="card-text"></p>
              </div>
            </div>
          );
        })}
        <div className="load" onScroll={() => this.handleScroll()}></div>
      </div>
    );
  }
}
