import React, { Component } from 'react'
import { Icon } from "antd"
import "./style.less"
export default class componentName extends Component {
  state = {
    data: [],
    classname: []
  }
  componentDidMount() {
    let a = JSON.parse(localStorage.getItem("data"))
    this.setState({
      data: a.two
    })
  }
  top=(v)=>{
    let a=document.querySelectorAll(".meiHeaderleft")
    let b=document.querySelector(".foodright")
    for(let i=0;i<a.length;i++)
    {
      if(v==a[i].innerHTML)
      {
        b.scrollTop=a[i].offsetTop
      }
    }
  }
  render() {
    const { data } = this.state
    return (
      <div className="bxoaaaa">
        <div className="shangTop">
          <div className="childshNGTop">
            <div className="footleft">
              {
                data.map((v, i) => {
                  return <p key={i} onClick={()=>this.top(v.name)} className="foodnameone">{v.name}</p>
                })
              }
            </div>
            <div className="foodright">
              {
                data.map((v, ii) => {
                  return <div key={ii}>
                    <p className="meiHeader">
                      <span className="meiHeaderleft">{v.name}</span>
                      <span className="meiHeaderright"><Icon type="dash" /></span>
                    </p>
                    {
                      v.foods.map((k, i) => {
                        return <dl key={i} className="shoponennn">
                          <dt>
                            <img src={"//elm.cangdu.org/img/" + k.image_path} alt="" />
                          </dt>
                          <dd>
                            <p className="headerOOne">{k.name}</p>
                            <p className="ttttto">{k.description}</p>
                            <p className="cccccccc">月销售{k.month_sales}份 好评率{k.satisfy_rate}%</p>
                            <p className="lastPirbox"><span><span className="lastPirboxspanone">¥20</span>起</span><span className="lastPirboxiop">
                                  {
                                    k.specifications.length!=0?<span className="guigee">规格</span>:<Icon type="plus-circle" style={{fontSize:"0.3rem"}}/>
                                  }
                              </span></p>
                          </dd>
                        </dl>
                      })
                    }
                  </div>
                })
              }
              <div style={{width:"100%",height:"100%"}}>

              </div>
            </div>
          </div>
        </div>
        <div className="lastMoney">

        </div>
      </div>
    )
  }
}
