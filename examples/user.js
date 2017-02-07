import {createStore} from '../src/react-data-store'

export default createStore(setState=>{
	return {
		name:"toy",
		info:{
			thumb:null
		},
		login(id,pass){
			setState({name:"other"})
		}	
	}
})