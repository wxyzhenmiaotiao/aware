import React, { Component } from 'react'

export default class componentName extends Component {
  jumpSort=(v)=>{
    localStorage.setItem("namefenlei",v.title)
    this.props.history.push("/ofclassifications")
  }
  render() {
    const data=this.props.data
    return (
      <dl onClick={()=>this.jumpSort(data)}>
        <dt>
          <img src={"https://fuss10.elemecdn.com"+data.image_url} alt=""/>
        </dt>
        <dd>
          {
            data.title
          }
        </dd>
      </dl>
    )
  }
}
