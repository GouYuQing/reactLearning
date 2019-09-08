import React, { Component } from 'react';
import 'antd/dist/antd.css'
import {Input,Button,List} from 'antd'
import store from './store'

// const data=[
//     'hello',
//     'world',
//     'hhhhh'
// ]


class TodoList extends Component {
    constructor(props) {
        super(props);
        console.log(store.getState());
        this.state = store.getState();
        this.changeInputValue = this.changeInputValue.bind(this);
        this.storeChange = this.storeChange.bind(this);
        this.clickBtn = this.clickBtn.bind(this);
        store.subscribe(this.storeChange);

    }
    render() { 
        return ( 
            <div style={{margin:'10px'}}>
                <div>
                <Input placeholder={this.state.inputValue} style={{width:'250px',marginRight:'10px'}}
                onChange = {this.changeInputValue}
                /> 
                <Button type="primary" onClick={this.clickBtn}>增加</Button>    
                </div>
                <div style={{margin:'10px',width:'300px'}}>
                    <List
                    bordered
                    dataSource={this.state.list}
                    renderItem = {(item,index)=>(<List.Item onClick={this.deleteItem.bind(this.index)}>{item}</List.Item>)}
                    />
                </div>
            </div>
         );
    }
    changeInputValue(e){
        // console.log(e.target.value);
        const action = {
            type:'changeInput',
            value:e.target.value
        }
        store.dispatch(action);
    }
    //改变组件的状态
    storeChange(){
        this.setState(store.getState())
    }
    clickBtn(){
        const action ={type:'addItem'};
        store.dispatch(action);
    }
    deleteItem(index){
        console.log(index);
        const action = {
            type:"deleteItem",
            index
        }
        store.dispatch(action)
    }
}
 
export default TodoList;