import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'antd/dist/antd.less'
<<<<<<< HEAD
import { Home , Login, Choosechild, Logindefs, Download, Details ,Fu ,Service , Product, Balance} from "@/utils/routersLoader"
=======
import { Home, Login, Choosechild, Logindefs, Shopone, Download, Details, Fu, Service, Product } from "@/utils/routersLoader"
>>>>>>> ea129366bac42cb7dd3061342dfc6949e14c0fc6
export default class extends Component {
	render() {
		return (
			<>
				<BrowserRouter>
					<Switch>
<<<<<<< HEAD
						<Route path='/balance' component={Balance} />
=======
						<Route path="/Shopone" component={Shopone} />
>>>>>>> ea129366bac42cb7dd3061342dfc6949e14c0fc6
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
