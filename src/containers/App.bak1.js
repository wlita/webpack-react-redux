import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Header from '../components/Header'

class App extends React.Component {
	constructor(props) {
	    super(props)
	}

	componentDidMount() {
	    const { dispatch, selectedSubreddit } = this.props
	    dispatch(fetch('http://localhost:7777/api/homead', {
				method: "get"
			}).then(response => response.text())
	    )
	}

	render () {
		const { value,href, onInClick } = this.props

		return (
			<div>
				<Header />
				<p> { value } </p>
				<button onClick={onInClick}>Increase</button>
			</div>
		)
	}
}

function mapStateToProps(state, ownProps) {
  return {
    value: JSON.stringify(state),
    href: JSON.stringify(ownProps)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onInClick: () => {
    	window.setTimeout(function() {
    		dispatch({ type: 'C' })
    	}, 1000)
    },
    dispatch: () => dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
