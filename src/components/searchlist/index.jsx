import React, { Component } from 'react'
import "./style.less"
export default class componentName extends Component {
  render() {
    const data = this.props.data
    return (
      <dl className="searchRow">
        <dt>
          <img src={"//elm.cangdu.org/img/" + data.image_path} alt="" />
        </dt>
        <dd>
          <p className="tou">
            {
              data.name
            }
          </p>
          <p>
            月售
                {
              data.recent_order_num
            }
          </p>
          <p className="money">
            ¥{
              data.float_minimum_order_amount
            }起送/距离您{
              data.distance
            }
          </p>
        </dd>
      </dl>
    )
  }
}
