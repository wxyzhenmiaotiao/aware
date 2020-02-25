import React, { Component } from 'react'
import './styles.less'
import { connect } from 'react-redux'
import { sponsored } from "@/api/actions"

export default @connect(state => {
  return {
    data: state.user,
  }
})
class extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: []
    }
    const id = localStorage.getItem('user_id')
    sponsored(id,20,0)
      .then(res => {
        console.log(res)
      })
  }



  render() {
    return (
      <div className="Preferential_left_box">
        
      </div>
    )
  }
}