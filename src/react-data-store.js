import React from 'react'
import Store from './store'
export const withStore=items=>Component=>class extends React.Component{
	state=this.trans(items)
	componentDidMount(){
		for(let it in items){
			this[it]=items[it].sub(data=>this.setState({[it]:data}))
		}
	}
	componentWillUnmount(){
		for(let it in items){
			this[it].unsub()
		}
	}
	trans(items){
		var _items={}
		for(let it in items){
			_items[it]=items[it].get()
		}
		return _items
	}
	render(){
		return <Component {...this.props} {...this.state} />
	}
}
export function createStore(fn){
	var store
	var state
	var dispatch=function(data){
		Object.assign(state,data)
		store.pub(state)
	}
	state=fn(dispatch)
	store=new Store(state)
	return store
}