import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

import App from './app/App'
import Home from './app/Home'
import List from './app/List'
import Detail from './app/Detail'
import NotFount from './app/NotFount'

const routerConfig = [
	{
		path: '/',
		component: Home,
		exact: true
	},
	{
		path: '/App',
		component: App,
		exact: true	
	},
	{
		path: '/List',
		component: List,
		exact: true	
	},
	{
		path: '/Detail',
		component: Detail,
		exact: true	
	},
	{
		path: '*',
		component: NotFount,
		exact: true	
	},
]

const RouterMap = () => {
	return (
			<Router>
			    <div>
			      <ul>
			        <li><Link to="/">Home</Link></li>
			        <li><Link to="/App">App</Link></li>
			        <li><Link to="/List">List</Link></li>
			        <li><Link to="/Detail">Detail</Link></li>
			        <li><Link to="/NotFount">NotFount</Link></li>
			      </ul>
			      <hr/>
			      <Switch>
			      {
			      	routerConfig.map((router, i) => {
						return <Route key={i} exact={ router.exact } path={ router.path } component={ router.component }/>
					})
			      }
			      </Switch>
			    </div>
			</Router>
		)
}

export default RouterMap