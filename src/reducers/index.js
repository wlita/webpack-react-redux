import React from 'react'
import {
	combineReducers
} from 'redux'
import userInfo from './userInfo'
import name from './name'

export default combineReducers({
	userInfo,
	name
})