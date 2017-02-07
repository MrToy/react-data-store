# react-data-store

react-data-store is a state manager for React

##installation

	npm install --save react-data-store
	
##How it works

It will map your store properties to component

component.js

```js
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
				<button onClick={onchange}>Click me!</button>
			</div>
		)
	}
}

export default Main
```

one of store.js

```js
import {createStore} from './react-data-store'

export default createStore({
	key:1,
	change(){
		this.setState({key:Math.random()})
	}
})
```


