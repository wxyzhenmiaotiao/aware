import React, { Component } from 'react'
import { evaluafen, evalualei, evalualist } from "@/api/actions"
import { Spin } from "antd"
import InfiniteScroll from "react-infinite-scroller"
import "./style.less"
export default class componentName extends Component {
  state = {
    fen: "",
    list: [],
    lei: []
  }
  componentDidMount() {
    let data = JSON.parse(localStorage.getItem("data"))
    let id = data.one.id
    evaluafen(id).then(res => {
      evalualei(id).then(res1 => {
        evalualist(id, 0, 10).then(res2 => {
          this.setState({
            list: res2.data,
            lei: res1.data,
            fen: res.data
          })
        })
      })
    })
  }
  loadFunc=()=>{
    console.log("1111111111")
  }
  render() {
    const { fen, list, lei } = this.state
    console.log(fen, lei, list)
    return (
      <div className="evaluateBox">
        {
          fen != "" ? <div className="evaluateBox1">
            <div className="fenshuBox">
              <div className="fenshuleft">
                  <span className="zongfenshu">22</span>
                  <span className="zonghespan">综合评价</span>
                  <span className="heightshop">高于周边商家%</span>
              </div>
              <div className="fenshuright">

              </div>
            </div>
            <InfiniteScroll
              pageStart={0}
              loadMore={this.loadFunc}
              hasMore={true}
              loader={<div className="loaderLoading" key={0}><Spin/><span className="loadingSpan">Loading</span></div>}
              useWindow={false}
              threshold="-170"
            >
              
            </InfiniteScroll>
          </div> : null
        }

      </div>
    )
  }
}
