import React, { Component } from 'react'
import { Icon, Spin } from "antd"
import Shoplist from "@/components/shoplist"
import { shop , fenlist } from "@/api/actions"
import "./style.less"
export default class componentName extends Component {
  state = {
    name: "",
    shop: [],
    list:[]
  }
  componentDidMount() {
    let name = localStorage.getItem("namefenlei")
    shop(localStorage.getItem("childone")).then(res => {
      fenlist(localStorage.getItem("childone")).then(a=>{
        this.setState({
          shop: res.data,
          name: name,
          list:a.data
        })
      })
    })
  }
  back = () => {
    this.props.history.go(-1)
  }
  render() {
    let data1=this.state.list
    data1.filter(v=>{
      
    })
    const data=this.state.list
    console.log(data1)
    return (
      <div className="ofclass">
        <div className="ofclasstop">
          <div className="ofclassone" >
            <div onClick={this.back}>
              <Icon type="left" />
            </div>
            <p>
              {
                this.state.name
              }
            </p>
            <div>

            </div>
          </div>
          <div className="ofclasstwo">
            <p>
              {
                this.state.name
              }
            </p>
            |
            <p>排序</p>
            |
            <p>筛选</p>
          </div>
        </div>
        <div className="ofclassbody">
          <div className="fenleiposition">
              <div className="fenlkeitop">
                  <div className="fenlkeitopleft">
                    {
                      data.length!=0?data.map((v,i)=>{
                       return  <div>
                            {/* <img src={v.} alt=""/> */}
                        </div>
                      }):null
                    }
                  </div>
                  <div className="fenlkeitopright">

                  </div>
              </div>
          </div>
          {
            this.state.shop.length == 0 ? <div className="listLoading">
              <Spin />
              <span>
                正在拼命加载中
                 </span>
            </div> : this.state.shop.map((v, index) => {
              return <Shoplist {...this.props} key={index} data={v} />
            })
          }
        </div>
      </div>
    )
  }
}
