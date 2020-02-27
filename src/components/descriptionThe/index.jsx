import React, { Component } from 'react'
import './styles.less'

export default class extends Component {
  render() {
    return (
      <div className="descriptionThe_box"> 
        <div className="descriptionThe_box_head">
          <div className="descriptionThe_box_head_left">
            <span>{'<'}</span>
          </div>
          <div className="descriptionThe_box_head_right">
            红包说明
          </div>
        </div>
        <div className="descriptionThe_box_body">
          <p className="p1">Q1:怎么获得红包</p>
        </div>
      </div>
    )
  }
}
