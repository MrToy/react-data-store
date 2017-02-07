export default class Store{
	_handle=[]
	_data=null
	constructor(data){
		if(data)this._data=data
	}
	get(){
		if(this._data instanceof Array){
			return [...this._data]
		}
		if(this._data instanceof Object){
			return {...this._data}
		}
		return this._data	
	}
	sub(fn){
		if(this._data)fn(this._data)
		var len=this._handle.length
		this._handle.push(fn)
		return {unsub:()=>this._handle.splice(len,1)}
	}
	pub(data){
		this._data=data
		this._handle.forEach(fn=>fn(data))
	}
}
