export function createReducer (initialState, handlers) {
    return function reducer(state = initialState, action) {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action)
        } else {
            return state
        }
    }
}

Array.prototype.del = function(n) {　
	//n表示第几项，从0开始算起。
  //prototype为对象原型，注意这里为对象增加自定义方法的方法。
　if(n<0)　//如果n<0，则不进行任何操作。
　　return this;
　else
　　return this.slice(0,n).concat(this.slice(n+1,this.length));
　　/*
　　　concat方法：返回一个新数组，这个新数组是由两个或更多数组组合而成的。
　　　　　　　　　这里就是返回this.slice(0,n)/this.slice(n+1,this.length)
　　 　　　　　　组成的新数组，这中间，刚好少了第n项。
　　　slice方法： 返回一个数组的一段，两个参数，分别指定开始和结束的位置。
　　*/
}