import {createStore} from './react-data-store'

export default createStore({
	key:1,
	change(){
		this.setState({key:Math.random()})
	}
})