import React, { Component } from 'react'
import { verification } from '@/utils/request'
import { fetchLogin } from '@/actions/login'
import { connect } from 'react-redux'
import './styles.less'

export default @connect(state => ({
  
}), {
  fetchLogin,
})
class extends Component {
  constructor(props){
    super(props)
    this.state = {
      verificationImg: "",
      username: "",
      password: ""
    }
    verification('api/v1/captchas').then(res => {
      this.setState({
        verificationImg: res.code
      })
    })
  }

  name = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  pass = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  captcha = (e) => {
    this.setState({
      captcha: e.target.value
    })
  }

  btnLogin = () => {
    const { username, password, captcha } = this.state
    if(username === "" || password === "" || captcha === ""){
      alert('输入为空')
    }else{
      let obj = {
        username: username,
        password: password,
        captcha_code: captcha
      }
      this.props.fetchLogin(obj)

    }
  }

  render() {
    const { verificationImg } = this.state
    return (
      <div className="login_box">
        <div className="login_head"> 
          <div className="login_head_1">
            ←
          </div>
          <div className="login_head_2">
            登录中心
          </div>
        </div>
        <div className="login_body">
          <p><input onChange={this.name} placeholder="账号" type="text"/></p>
          <p><input onChange={this.pass} placeholder="密码" type="text"/></p>
          <div className="validation">
            <input onChange={this.captcha} placeholder="验证码" type="text"/>
            <div className="yan">
              <img src={verificationImg} alt=""/>
            </div>
          </div>
          <div className="annotation">
            <p>温馨提示：未注册过的账号，登录时将自动注册注册过的账户可凭账号密码登录</p>
          </div>
          <button onClick={this.btnLogin} className="login_btn">登录</button>
        </div>
      </div>
    )
  }
}
