import React, { Component } from 'react';

import store from './store'
// import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM} from './store/actionTypes'
import {getMyListAction,changeInputAction,addItemAction,deleteItemAction} from './store/actionCreators'
import TodoListUI from './store/TodoListUI'
// import axios from 'axios'
// const data=[
//     'hello',
//     'world',
//     'hhhhh'
// ]


class TodoList extends Component {
    constructor(props) {
        super(props);
        // console.log(store.getState());
        this.state = store.getState();
        this.changeInputValue = this.changeInputValue.bind(this);
        this.storeChange = this.storeChange.bind(this);
        this.clickBtn = this.clickBtn.bind(this);
        this.deleteItem = this.deleteItem.bind(this)
        store.subscribe(this.storeChange);

    }
    render() { 
        return(
            <TodoListUI 
            inputValue={this.state.inputValue}
            changeInputValue = {this.changeInputValue}
            clickBtn = {this.clickBtn}
            list = {this.state.list}
            deleteItem = {this.deleteItem}
            />
         );
    }
    changeInputValue(e){
        // console.log(e.target.value);
        // const action = {
        //     type:CHANGE_INPUT,
        //     value:e.target.value
        // }
        const action = changeInputAction(e.target.value)
        store.dispatch(action);
    }
    //生命周期
    componentDidMount(){
        // axios.get('https://www.easy-mock.com/mock/5d44f5cf8aa85155233ce36d/example/getList')
        // .then(res=>{
        //     // console.log(res);
        //     const data = res.data;
        //     const action = getListAction(data);
        //     store.dispatch(action)

        // })
        // const action = getTodoList();
        // store.dispatch(action)
        const action =getMyListAction()
        store.dispatch(action)
        // console.log(action)
    }
    //改变组件的状态
    storeChange(){
        this.setState(store.getState())
    }
    clickBtn(){
        // const action ={type:ADD_ITEM};
        const action = addItemAction();
        store.dispatch(action);
    }
    deleteItem(index){
        // console.log(index);
        // const action = {
        //     type:DELETE_ITEM,
        //     index
        // }
        const action = deleteItemAction(index);
        store.dispatch(action);
    }

}
 
export default TodoList;