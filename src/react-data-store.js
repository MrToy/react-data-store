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
export function createStore(it){
	var store=new Store(it)
	it.setState=function(data){
		Object.assign(this,data)
		store.pub(this)
	}
	return store
}