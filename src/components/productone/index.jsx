import React, { Component } from 'react'
import "./style.less"
export default class componentName extends Component {
  state = {
    data: []
  }
  componentDidMount() {
    let a = JSON.parse(localStorage.getItem("data"))
    this.setState({
      data: a.two
    })
  }
  render() {
    const { data } = this.state
    console.log(data)
    return (
      <div className="bxoaaaa">
        <div className="shangtop">
         
        </div>
        <div className="xiaBox">
          
        </div>
      </div>
    )
  }
}
