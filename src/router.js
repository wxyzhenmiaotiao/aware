import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'antd/dist/antd.less'
<<<<<<< HEAD
import { Home , Login, Choosechild, Logindefs, Download, Service , Product, Fu} from "@/utils/routersLoader"
=======
import { Home , Login, Choosechild, Logindefs, Download, Details , Service , Product} from "@/utils/routersLoader"
>>>>>>> ff2ad426443483e7ddf081dc4a627db87b4fe254
export default class extends Component {
	render() {
		return (
			<>
				<BrowserRouter>
					<Switch>
						<Route path='/fu/:id' component={Fu} />
						<Route path='/Product' component={Product} />
						<Route path='/Details' component={Details} />
						<Route path='/service' component={Service} />
						<Route path='/download' component={Download} />
						<Route path='/login' component={Logindefs} />
						<Route path='/home' component={Home} />
						<Route path='/choose/:id' component={Choosechild} />
						<Route path='/' component={Login} />
					</Switch>
				</BrowserRouter>
			</>
		)
	}
}
