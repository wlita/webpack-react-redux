import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class App extends React.Component {
	render () {
		const { value, onInClick } = this.props
		debugger
		return (
			<div>
				<p> { value } </p>

				<button onClick={onInClick}>Increase</button>
			</div>
		)
	}
}

function mapStateToProps(state) {
  return {
    value: state.userInfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onInClick: () => dispatch({ type: 'A' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
