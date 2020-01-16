import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'antd/dist/antd.less'
import { Home ,Login,Choosechild} from "@/utils/routersLoader"
export default class extends Component {
	render() {
		return (
			<>
				<BrowserRouter>
					<Switch>
						<Route path='/home' component={Home} />
						<Route path='/choose/:id' component={Choosechild} />
						<Route path='/' component={Login} />
					</Switch>
				</BrowserRouter>
			</>
		)
	}
}
