import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'antd/dist/antd.less'
import { 
	Home , 
	Login, 
	Choosechild, 
	Logindefs, 
	Download,
	Details,
	Fu,
	Service,
	Product, 
	Balance, 
	Shopone, 
	Personal, 
	Modify, 
	CreateGoods,
	Address,
	Menber,
	Meming,
	Buy,
	Preferential,
	Placing,
	Exchange,
	Placingaddress,
<<<<<<< HEAD
	DescriptionThe
=======
	Remarks,
	Pay,
>>>>>>> 3941dd70974e63dadfd9763b30c32c822cbc4a99
} from "@/utils/routersLoader"
export default class extends Component {
	render() {
		return (
			<>
				<BrowserRouter>
					<Switch>
<<<<<<< HEAD
						<Route path='/descriptionThe' component={DescriptionThe} />
=======
						<Route path="/pay" component={Pay}/>
						<Route path="/remarks" component={Remarks}/>
>>>>>>> 3941dd70974e63dadfd9763b30c32c822cbc4a99
						<Route path='/preferential' component={Preferential} />
						<Route path="/placingaddress" component={Placingaddress}/>
						<Route path="/placing" component={Placing}/>
						<Route path='/exchange' component={Exchange} />
						<Route path='/buy' component={Buy} />
						<Route path='/meming' component={Meming} />
						<Route path='/menber' component={Menber} />
						<Route path='/address' component={Address} />
						<Route path='/createGoods' component={CreateGoods} />
						<Route path='/modify' component={Modify} />
						<Route path='/personal' component={Personal} />
						<Route path='/balance' component={Balance} />
						<Route path="/Shopone" component={Shopone} />
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
