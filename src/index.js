import React from 'react'
import { render } from 'react-dom'
import RouterMap from './router'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

const store = configureStore()

render(
	<Provider store={store}>
		<RouterMap/>
	</Provider>
	, document.getElementById('root')
)

// console.log(process.env.NODE_ENV)
// console.log(store.dispatch({type: 'A'}))
// console.log(store.getState())
// console.log(store.dispatch({type: 'A'}))
// console.log(store.getState())
// console.log(store.dispatch({type: 'B'}))
// console.log(store.getState())

// function addTodo(xxx) {
//   return {
//     type: 'A',
//     xxx
//   };
// }

// store.dispatch(addTodo('xxxx'))

// store.dispatch(function(dispatch) {

// 	fetch('http://localhost:7777/api/homead', {
// 		method: "get"
// 	}).then(response => response.text())
//       .then(json => console.log(json))
// })

