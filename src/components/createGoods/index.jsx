import React, { Component } from 'react'
import './styles.less';

export default class extends Component {
  address = () => {
    this.props.history.push('address')
  }

  fan = () => {
    this.props.history.go(-1)
  }

  render() {
    return (
      <div className="createGoods_box">

        <div className="createGoods_box_head">
          <div onClick={this.fan} className="createGoods_box_head_1">
            <span>{'<'}</span>
          </div>
          <div className="createGoods_box_head_2">
            编辑地址
          </div>
          <div className="createGoods_box_head_3">
            编辑
          </div>
        </div>

        <div className="createGoods_box_body">
          <div onClick={this.address} className="createGoods_box_body_line">
            <p className="createGoods_box_body_line_left">修改地址</p>
            <p className="createGoods_box_body_line_right">></p>
          </div>
        </div>

      </div>
    )
  }
}
