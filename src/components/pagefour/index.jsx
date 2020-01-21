import React, { Component } from 'react'
import { Icon } from "antd"
import './styles.less'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image: "../../img/2.jpg"
    }
  }

  loginBtn = () => {
    this.props.history.push('/login')
  }

  render() {
    const { image } = this.state
    return (
      <div className="four_body">
        <div className="four_body_1">
          <div className="four_body_1_left">
            <Icon type="left" />
          </div>
          <div className="four_body_1_right">
            我的
          </div>
        </div>
        <div onClick={this.loginBtn} className="four_body_2">
          <div className="four_body_2_img">
            <img src={image} alt="" />
          </div>
          <div className="four_body_2_left">
            <p className="p1">登录/注册</p>
            <p className="p2"><img src="../../img/1.jpg" alt="" />暂无绑定手机号</p>
          </div>
          <div className="four_body_2_right">
            →
          </div>
        </div>
        <div className="four_body_3">
          <div className="four_body_3_1">
            <div className="four_body_3_1_p1">
              <p><span className="four_body_3_1_p1_yuan">0.00</span>元</p>
              <p>我的余额</p>
            </div>
          </div>
          <div className="four_body_3_1">
            <div className="four_body_3_1_p1">
              <p><span className="four_body_3_1_p1_shu">3</span>个</p>
              <p>我的优惠</p>
            </div>
          </div>
          <div className="four_body_3_1">
            <div className="four_body_3_1_p1">
              <p><span className="four_body_3_1_p1_fen">0</span>分</p>
              <p>我的积分</p>
            </div>
          </div>
        </div>
        <div className="four_body_4">
          <div className="four_body_4_p">
            <p className="four_body_4_p_left">我的订单</p>
            <p className="four_body_4_p_right">></p>
          </div>
          <div className="four_body_4_p">
            <p className="four_body_4_p_left">积分商城</p>
            <p className="four_body_4_p_right">></p>
          </div>
          <div className="four_body_4_p">
            <p className="four_body_4_p_left">饿了么会员卡</p>
            <p className="four_body_4_p_right">></p>
          </div>
        </div>
        <div className="four_body_5">
          <div className="four_body_4_p">
            <p className="four_body_4_p_left">服务中心</p>
            <p className="four_body_4_p_right">></p>
          </div>
          <div className="four_body_4_p">
            <p className="four_body_4_p_left">下载了饿了么APP</p>
            <p className="four_body_4_p_right">></p>
          </div>
        </div>
      </div>
    )
  }
}
