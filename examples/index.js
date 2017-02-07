import React from 'react'
import store from '../store'
import {withStore} from '../store/react-data-store'

@withStore({store})
class Main extends React.Component{
	render(){
		let {key,onchange}=this.props.store
		return(
			<div>
				<div>{key}</div>
				<button onClick={onchange}>233</button>
			</div>
		)
	}
}

export default Main