import React, { Component } from 'react'
import { xiangxi } from "@/api/actions"
export default class componentName extends Component {
  componentDidMount(){
    let id=localStorage.getItem("shopid")
    xiangxi(id).then(res=>{
      console.log(res)
    })
  }
  render() {
    return (
      <>
        sssssss
      </>
    )
  }
}
