import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM} from './actionTypes'


const defaultState ={
    inputValue:'Write Something',
    list:[
        'hello',
        'world',
        'hhhhh'
    ]
}
export default(state= defaultState,action)=>{
    // console.log(state,action)
    if(action.type === CHANGE_INPUT){
        //reducer只能接受state，不能改变state
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value;
        //返回给仓库
        return newState;
    }
    if(action.type===ADD_ITEM){
        let newState = JSON.parse(JSON.stringify(state))
        //将值放入list中
        newState.list.push(newState.inputValue);
        newState.inputValue = "";
        return newState;
    }
    if(action.type===DELETE_ITEM){
        let newState = JSON.parse(JSON.stringify(state))
        //将值删除
        // console.log(action.index);
        newState.list.splice(action.index,1);
        return newState;
    }
    return state
}