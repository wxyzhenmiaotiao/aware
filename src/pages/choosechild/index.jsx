import React, { Component } from 'react'
import "./style.less"
export default class componentName extends Component {
  render() {
    console.log(this.props.match.params.id)
    console.log()
    return (
      <div className="chooseChild">
        <div className="headerChoose">
          <p className="choosesma"> ㄑ </p>
          <p className="fontsone">{localStorage.getItem("fontsname")}</p>
          <p>切换城市</p>
        </div>
        <div className="flexchoose">

        </div>
      </div>
    )
  }
}
