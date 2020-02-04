import React, { Component } from 'react'
import { Icon } from "antd"
import Start from "@/components/start"
import "./style.less"
export default class componentName extends Component {
  back=()=>{
    this.props.history.go(-1)
  }
  add=(v)=>{
    console.log(v)
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
                ¥ <span>0.00</span>
              </p>
              <p>配送费¥5</p>
            </div>
          </div>
          <div className="lastMoneyjiesuan">
            去结算
                </div>
        </div>
      </div>
    )
  }
}
