import React from 'react'

const List = () => {
	const arr = ['arr1', 'arr2', 'arr3', 'axxxxx']
	return (<ul>
			{
				arr.map( (item, i) => {
					return <li key={i}> { item } </li>
				})
			}
		</ul>)
}

export default List