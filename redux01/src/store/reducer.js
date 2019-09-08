const defaultState ={
    inputValue:'Write Something',
    list:[
        'hello',
        'world',
        'hhhhh'
    ]
}
export default(state= defaultState,action)=>{
    console.log(state,action)
    if(action.type === 'changeInput'){
        //reducer只能接受state，不能改变state
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value;
        //返回给仓库
        return newState;
    }
    if(action.type==='addItem'){
        let newState = JSON.parse(JSON.stringify(state))
        //将值放入list中
        newState.list.push(newState.inputValue);
        newState.inputValue = " ";
        return newState;
    }
    if(action.type==='deleteItem'){
        let newState = JSON.parse(JSON.stringify(state))
        //将值删除
        newState.list.splice(action.index,1);
        return newState;
    }
    return state
}