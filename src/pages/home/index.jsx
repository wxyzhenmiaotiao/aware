import React, { Component } from 'react'
import './styles.less'
import { Pageone, Pagetwo, Pagethree, Pagefour} from "@/utils/routersLoader"
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom'

export default class extends Component {
  render() {
    return (
      <div className="box">
        <div className="body">
          <Switch>
              <Route path="/home/pagetwo" component={Pagetwo} />
              <Route path="/home/pagethree" component={Pagethree} />
              <Route path="/home/pagefour" component={Pagefour} />
              <Route path="/home" component={Pageone} />
          </Switch>
        </div>

        <div className="foot">
          <Link className="a" to="/home">
            <dl className="iconfont">
              <dt className="icon-daocha"></dt>
              <dd>外卖</dd>
            </dl>
          </Link>
          <Link className="a" to="/home/pagetwo">
            <dl className="iconfont">
              <dt className="icon-xiepinglun1"></dt>
              <dd>搜索</dd>
            </dl>
          </Link>
          <Link className="a" to="/home/pagethree">
            <dl className="iconfont">
              <dt className="icon-daishouhuo2"></dt>
              <dd>订单</dd>
            </dl>
          </Link>
          <Link className="a" to="/home/pagefour">
            <dl className="iconfont">
              <dt className="icon-geshou"></dt>
              <dd>个人</dd>
            </dl>
          </Link>
        </div>
      </div>
    )
  }
}
