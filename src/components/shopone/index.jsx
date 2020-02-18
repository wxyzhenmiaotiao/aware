import React, { Component } from 'react'
import { Icon } from "antd"
import Start from "@/components/start"
import "./style.less"
export default class componentName extends Component {
  state={
    pir:"0.00"
  }
  back=()=>{
    this.props.history.go(-1)
  }
  suan = (id) => {
    if (localStorage.getItem("shopcart")) {
      let data = JSON.parse(localStorage.getItem("shopcart"))
      let sum = 0
      data.filter(v => {
        if (v.shopid == id) {
          v.shopcartlist.filter(k => {
            sum += k.shuliang * 20
          })
        }
      })
      this.setState({
        pir: sum
      })
    }

  }
  componentDidMount() {
    let a = JSON.parse(localStorage.getItem("data"))
    let id = a.one.id
    this.suan(id)
  }
  add = (v) => {
    let a = JSON.parse(localStorage.getItem("data"))
    let nameone = v
    let shopid = a.one.id
    if (localStorage.getItem("shopcart")) {
      let data = JSON.parse(localStorage.getItem("shopcart"))
      let sum = 0
      data.filter(v => {
        if (v.shopid == shopid) {

        } else {
          sum++
        }
      })
      if (sum == data.length) {
        let data1 = JSON.parse(localStorage.getItem("shopcart"))
        let arr = []
        v.shuliang = 1
        arr.push(v)
        let a = {
          shopid: shopid,
          shopcartlist: arr
        }
        data1.push(a)
        localStorage.setItem("shopcart", JSON.stringify(data1))
      } else {
        data.filter(v => {
          if (v.shopid == shopid) {
            let data1 = v.shopcartlist
            let sum = 0
            data1.filter(k => {
              if (k.name == nameone.name) {
                k.shuliang = k.shuliang + 1
                localStorage.setItem("shopcart", JSON.stringify(data))
              } else {
                sum++
              }
            })
            if (sum == data1.length) {
              nameone.shuliang = 1
              v = v.shopcartlist.push(nameone)
              localStorage.setItem("shopcart", JSON.stringify(data))
            }
          }
        })
      }
    } else {
      let arr = []
      v.shuliang = 1
      arr.push(v)
      let ar = [{
        shopid: shopid,
        shopcartlist: arr
      }]
      localStorage.setItem("shopcart", JSON.stringify(ar))
    }
    this.componentDidMount()
    this.suan(shopid)
  }
  render() {
    const data=JSON.parse(localStorage.getItem("shopone"))
    return (
      <div className="shoponeBox">
        <div className="shoponeHeader">
            <div className="shoponedivvv" onClick={this.back}>
              <Icon type="left" />
            </div>
            <div className="shoponeFlexbxo">
                {
                  data.name
                }
            </div>
            <div className="shoponedivvv">
            </div>
        </div>
        <div className="shopooneBody">
            <div className="shoponeing">
                <img src={"//elm.cangdu.org/img/"+data.image_path} alt=""/>
            </div>
            <div className="shopOnefont">
              {data.name}
            </div>
            <div className="shopOnefont">
              <span style={{marginRight:"0.1rem"}}>评分</span>
            <Start data={data.rating} />
                <span style={{color:"#ff9a0d",marginLeft:"0.18rem"}}>
                  {
                    data.rating
                  }
                </span>
            </div>
            <div className="shopOnefont">
                  月售{data.month_sales}单 <span style={{color:"#ff9a0d",marginLeft:"0.18rem"}}>售价¥20起</span>
            </div>
            <div className="shopOnefont">
                  {
                    data.tips
                  }
            </div>
            <div className="shopOnefont">
              添加：
            <Icon onClick={()=>this.add(data)} type="plus-circle" style={{fontSize:"0.3rem"}}/>
            </div>
        </div>
        <div className="lastMoney">
          <div className="lastMoneyflex">
            <Icon type="shopping-cart" className="endIcon"/>
            <div className="lastMoneyflexbbbiox">
              <p>
  ¥ <span>{this.state.pir}</span>
              </p>
              <p>配送费¥5</p>
            </div>
          </div>
          {
            this.state.pir>=20?<div className="lastMoneyjiesuan">
            去结算
                </div>:<div className="qisong">
                  还差20起送
          </div>
          }
          
        </div>
      </div>
    )
  }
}
