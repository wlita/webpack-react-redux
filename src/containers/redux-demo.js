import React from 'react'
import {createStore, combineReducers} from 'redux'


function aa(state = 0, action) {
	switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

function bb(state = 0, action) {
	switch (action.type) {
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}


 // 定义计算规则，即 reducer
function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

// 根据计算规则生成 store
let store = createStore(combineReducers({
  aa,
  bb
}))

// const store = createStore(rootReducer, initialState,
//     // 触发 redux-devtools
//     window.devToolsExtension ? window.devToolsExtension() : undefined
// )

// 定义数据（即 state）变化之后的派发规则
store.subscribe(() => {
    console.log('current state', store.getState())
})

// 触发数据变化
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'DECREMENT'})
