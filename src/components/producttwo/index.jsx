import React, { Component } from 'react'
import { evaluafen, evalualei, evalualist } from "@/api/actions"
import { Spin } from "antd"
import Start from "@/components/start"
import InfiniteScroll from "react-infinite-scroller"
import "./style.less"
export default class componentName extends Component {
  state = {
    fen: "",
    list: [],
    lei: [],
    classarr: []
  }
  componentDidMount() {
    let data = JSON.parse(localStorage.getItem("data"))
    let id = data.one.id
    evaluafen(id).then(res => {
      evalualei(id).then(res1 => {
        evalualist(id, 0, 10).then(res2 => {
          let arr = []
          for (let i = 0; i < res1.data.length; i++) {
            arr.push("proleTokele")
          }
          this.setState({
            list: res2.data,
            lei: res1.data,
            fen: res.data,
            classarr: arr
          })
        })
      })
    })
  }
  porpleclick = (v) => {
    let arr = this.state.classarr
    let sum = arr.length
    let arr1 = []
    for (let i = 0; i < sum; i++) {
      arr1.push("proleTokele")
    }
    arr1[v] = "proleTokele1"
    this.setState({
      classarr: arr1
    })
  }
  // https://fuss10.elemecdn.com/1/5f/6cf782b0c9cd5ca8daa7f76ab05aejpeg.jpeg
  //https://fuss10.elemecdn.com/5/38/8b26ad173389d89e0e015dbf295fcjpeg.jpeg
  //https://fuss10.elemecdn.com/d/c8/64033625905f0a15a2d181d53a425jpeg.jpeg
  loadFunc = () => {
    console.log("1111111111")
  }
  render() {
    const { fen, list, lei, classarr } = this.state
    console.log(list)
    return (
      <div className="evaluateBox">
        {
          fen != "" ? <div className="evaluateBox1">
            <div className="fenshuBox">
              <div className="fenshuleft">
                <span className="zongfenshu">4.7</span>
                <span className="zonghespan">综合评价</span>
                <span className="heightshop">高于周边商家{(fen.compare_rating * 100).toFixed(1)}%</span>
              </div>
              <div className="fenshuright">
                <div className="fuwu"><p>服务态度</p><Start data={fen.service_score.toFixed(1)} /><span>{fen.service_score.toFixed(1)}</span></div>
                <div className="fuwu"><p>菜品评价</p><Start data={fen.food_score.toFixed(1)} /><span>{fen.food_score.toFixed(1)}</span></div>
                <div className="fuwu"><p>送达时间</p>
                  <span className="minuate">分钟</span>
                </div>
              </div>
            </div>
            <div className="propleTalk">
              {
                lei.map((v, i) => {
                  return <span key={i} className={classarr[i]} onClick={() => this.porpleclick(i)}>
                    {
                      v.name
                    }
                    ({v.count})
                  </span>
                })
              }
            </div>
            {/* <InfiniteScroll
              pageStart={0}
              loadMore={this.loadFunc}
              hasMore={true}
              loader={<div className="loaderLoading" key={0}><Spin/><span className="loadingSpan">Loading</span></div>}
              useWindow={false}
              threshold="-170"
            >
              
            </InfiniteScroll> */}
          </div> : null
        }

      </div>
    )
  }
}
