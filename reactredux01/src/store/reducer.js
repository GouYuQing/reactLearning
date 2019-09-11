const defaultState = {
    inputValue :'hello world',
    list:[]
}
export default(state = defaultState,action)=>{
    if(action.type === 'change_input'){
        //深度拷贝
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === 'add_item'){
        //深度拷贝
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue="";
        return newState;
    }
    return state;
}