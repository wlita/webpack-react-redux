import React, { Component } from 'react'

class Title extends Component {
	render () {
		return <h1>title</h1>
	}	
}

class Header extends Component {
	constructor () {
		super()
		this.state = { showToast1: false, showToast2: false }	
	}
	
	toast2 = (e) => {
        this.setState({
        	showToast1: !this.state.showToast1
        })
    }

	render () {
		return (<div onClick={ this.toast2 }> 
			<Title/> this's Header ...... 
			{ this.state.showToast1 ? '点赞' : '未点赞'}
		</div>)
	}	
}

class Footer extends Component {
	render () {
		return <div> this's Footer ...... </div>	
	}
}

class App extends Component {

	renderHtml (mark) {
		return mark ? <div>true</div> : <div>false</div>
	}

	render () {
		return (
				<div>
				{
					this.renderHtml(true)
				}
				<Header />
					what's this xxx
				<Footer />
				</div>
			)
	}
}

export default App