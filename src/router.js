import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'antd/dist/antd.less'
import { Home } from "@/utils/routersLoader"
export default class extends Component {
	render() {
		return (
			<>
				<BrowserRouter>
					<Switch>
						<Route path='/' component={Home} />
					</Switch>
				</BrowserRouter>
			</>
		)
	}
}
