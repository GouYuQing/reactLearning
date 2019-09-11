import React, { Component } from 'react';
// import store from './store'
import {connect} from 'react-redux'//引入连接器，很容易获得数据

//无状态组件。提高效率
const TodoList=(props)=>{
    let {inputValue,inputChange,submitButton,list} = props;

    return ( <div>
        <div>
            <input value={inputValue} onChange={inputChange}/>
            <button onClick={submitButton}>提交</button>
        </div>
        <ul>
           {
               list.map((item,index)=>{
                   return (<li key={index}>{item}</li>)
               })
           }
        </ul>
    </div> );
}
// class TodoList extends Component {
//     constructor(props) {
//         super(props);
//         this.state = store.getState()
//     }
//     render() { 
//     let {inputValue,inputChange,submitButton,list} = this.props;

//         return ( <div>
//             <div>
//                 <input value={inputValue} onChange={inputChange}/>
//                 <button onClick={submitButton}>提交</button>
//             </div>
//             <ul>
//                {
//                    list.map((item,index)=>{
//                        return (<li key={index}>item</li>)
//                    })
//                }
//             </ul>
//         </div> );
//     }
//     // inputChange(e){
//     //     console.log(e.target.value)
//     // }
// }
//映射关系就是把原来的state映射成组件中的props属性，比如我们想映射inputValue就可以写成如下代码
const stateToProps = (state)=>{
    return {
        inputValue:state.inputValue,
        list:state.list
    }
}
const dispatchToProps =(dispatch)=>{
    return{
        inputChange(e){
            // console.log(e.target.value)
            let action = {
                type:'change_input',
                value:e.target.value
            }
            dispatch(action)
        },
        submitButton(){
            // console.log('hello')
            const action  = {
                type:'add_item'
            }
            dispatch(action);
        }
    }
}
export default connect(stateToProps,dispatchToProps)(TodoList);