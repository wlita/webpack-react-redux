import React from 'react'

const name = function (state = 0, action) {
	switch (action.type) {
        case 'A':
            return state + 1
        case 'B':
            return state - 1
        case 'C':
            return state - 1
        default:
            return state
    }
}

export default name