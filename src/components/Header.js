import React from 'react'
import styles from './Header.css'

class Header extends React.Component{
	render () {
		return (<div className={styles.hc}>
					<span className={`${styles.goback}`}> 返回 </span>
					<span className={styles.title}> 标题 </span>
				</div>)
	}
}

export default Header