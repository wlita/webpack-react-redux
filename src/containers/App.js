import React, { Component } from 'react'

class Title extends Component {
	render () {
		return <h1>title</h1>
	}	
}

class Header extends Component {
	
	toast2 = (e) => {
        console.log(this)
		console.log(e.target.innerHTML)
    }

	render () {
		return <div onClick={ this.toast2 }> <Title/> this's Header ...... </div>
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