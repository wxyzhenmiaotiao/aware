import React, { Component } from 'react'

export default class componentName extends Component {
  render() {
    const data=this.props.data
    return (
      <dl>
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
