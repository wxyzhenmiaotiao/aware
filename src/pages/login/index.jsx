import React, { Component } from 'react'
import './styles.less'
import { childone } from "@/api/actions"
import Childmodel from "@/components/childmodel/"
export default class extends Component {
  state = {
    guess: "",
    hot: [],
    group: []
  }
  componentDidMount() {
    childone("type=group").then(res => {
      let data = []
      for (let k in res.data) {
        data.push(k)
      }
      data.sort()

      let g = []
      data.filter(v => {
        let a = {}
        a[v] = res.data[v]
        a.name = v
        g.push(a)
      })
      childone("type=guess").then(ttt => {
        childone("type=hot").then(aaa => {
          this.setState({
            guess: ttt.data,
            hot: aaa.data,
            group: g
          })
        })
      })
    })
  }

  render() {
    return (
      <div className="Login-box">
        <div className="childUrlheader">
          <p>ele.me</p>
          <p><span>登陆</span>|<span>注册</span></p>
        </div>
        <div className="childFlex-box">
          <div className="rowPosition">
            <p className="leftPoition">
              当前定位城市
            </p>
            <p>
              定位不准确时，请在城市列表中选择
            </p>
          </div>
          <div className="positionBox">
            {
              this.state.guess != "" ? <p>{this.state.guess.name}</p> : <p>正在获取位置</p>
            }
            <p className="right">></p>
          </div>
          <div className="hotCity">
            <div className="hotP">热门城市</div>
            {
              this.state.hot.length == 0 ? <div>加载数据中</div> : <div className="hotBopx">
                {
                  this.state.hot.map(v => {
                    return <Childmodel {...this.props} key={v.id} name={v} />
                  })
                }
              </div>
            }
          </div>
          {
            this.state.group.map((v,index) => {
              return <div key={index} className="bodylast">
                <div className="headerlastone">
                  {
                    v.name
                  }
                </div>
                <div className="flexxx">
                  {
                    v[v.name].map(v=>{
                    return <Childmodel {...this.props} key={v.id} name={v}/>
                    })
                  }
                </div>
              </div>
            })
          }
        </div>

      </div>
    )
  }
}
