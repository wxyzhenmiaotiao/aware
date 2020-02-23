import React, { Component } from 'react'
import { Icon } from "antd"
import { address } from "@/api/actions"
import "./style.less"
export default class componentName extends Component {
  state = {
    data: "",
    userdata: ""
  }
  componentDidMount() {
    let data = JSON.parse(localStorage.getItem("placingdata"))
    let useraddress = JSON.parse(localStorage.getItem("usersaddress"))
    if (useraddress == null) {
      let id = localStorage.getItem("user_id")
      address(id).then(res => {
        this.setState({
          userdata: res.data[0]
        })
      })
    } else {
      this.setState({
        userdata: useraddress
      })
    }
    this.setState({
      data: data
    })
  }
  wode = () => {
    this.props.history.push("/home/pagefour")
  }
  jump = () => {
    this.props.history.push("/placingaddress")
  }
  render() {
    const { data, userdata } = this.state
    console.log(data)
    return (
      <div className="placing">
        <div className="placingtop">
          <p><Icon type="left" /></p>
          <div>确认订单</div>
          <p onClick={this.wode}><Icon type="user" /></p>
        </div>
        <div className="placingBody">
          {
            userdata != "" ? <div className="addressUserbox" onClick={this.jump}>
              <div className="addressUserleft">
                <p>
                  <span className="nameoneUserdaa">
                    {
                      userdata.name
                    }
                  </span>
                  <span className="phonenumverdiv" style={{ marginRight: "0.1rem" }}>先生</span>
                  <span className="phonenumverdiv">
                    {
                      userdata.phone
                    }
                  </span>
                </p>
                <p style={{ color: "#777 !important" }}>
                  <span style={{ marginRight: "0.1rem" }}>
                    {
                      userdata.tag
                    }
                  </span>
                  {
                    userdata.address
                  }
                </p>
              </div>
              <div className="addressUserright">
                >
            </div>
            </div> : null
          }
          {
            data!=""?<div className="timehuo">
              <div className="timehuoleft">
              送达时间
              </div>
              <div className="timehuoright">
          <p className="timehuorightp1">尽快送达 | 预计 {data.delivery_reach_time}</p>
                <p className="timehuorightp2">
                  <span>
                    蜂鸟专送
                  </span>
                </p>
              </div>
            </div>:null
          }
        </div>
      </div>
    )
  }
}
