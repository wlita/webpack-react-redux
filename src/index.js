import React from 'react';
import { render } from 'react-dom';
import './style.css'

class Hello extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            // 显示当前时间
            now: Date.now()
        }
    }
    render() {
        return (
            <div>
                <p>hello world {this.state.now}</p>
            </div>
        )
    }
}

// class Hello extends React.Component {
// 	render () {
// 		return (<p> hello world !!! </p>)
// 	}
// }

render(
  <Hello />,
  document.getElementById('root')
);
