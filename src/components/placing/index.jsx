import React, { Component } from 'react'
import { Icon } from "antd"
import "./style.less"
export default class componentName extends Component {
  state={
    data:""
  }
  componentDidMount(){
    this.setState({
      data:this.props.history.location.state
    })
  }
  wode=()=>{
    this.props.history.push("/home/pagefour")
  }
  render() {
    return (
     <div className="placing">
       <div className="placingtop">
          <p><Icon type="left" /></p>
          <div>确认订单</div>
          <p onClick={this.wode}><Icon type="user" /></p>
       </div>
     </div>
    )
  }
}
