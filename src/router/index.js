import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

import App from '../containers/App'
import Home from '../containers/Home'
import List from '../containers/List'
import Detail from '../containers/Detail'
import NotFound from '../containers/NotFount'

class RouteMap2 extends React.Component { 
	render() { 
		return (
			<Router>
				<Switch>
					<Route exact path='/' component={App} /> 
				    <Route path='/home' component={Home}/>
				    <Route path='/list' component={List}/> 
				    <Route path='/detail/:id' component={Detail}/> 
				    <Route path='*' component={NotFound}/> 
				</Switch>
			</Router> 
		) 
	}
}

export default RouteMap2