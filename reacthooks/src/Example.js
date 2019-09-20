// import React, { Component } from 'react';
//使用hooks的方法来写就不用使用component了
import React, { useState,useEffect } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
// class Example extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             count:0
//          }
//     }
//     render() { 
//         return ( 
//             <div>
//                 <h2>hello example</h2>
//                 <p>你点击了{this.state.count}次</p>
//                 <button  onClick={this.addCount.bind(this)}>点击</button>
//             </div>
//              );
//     }
//     addCount(){
//         this.setState({count:this.state.count+1})
//     }
// }
function Index(){
    useEffect(()=>{
        console.log(`hello index页面`)
        return ()=>{
            console.log(`再见index！`)
        }
    },[])
    return (<div>hello world</div>)
}
function Page(){
    useEffect(()=>{
        console.log(`hello page页面`);
        return ()=>{
            console.log(`再见page页面`)
        }
    },[])
    return (<div>List-page</div>)
}
function Example(){
    const [count,setCount]=useState(0);//数组解构

    useEffect(()=>{
        console.log(`useEffect =>you clicked ${count}times`)
        return ()=>{
            console.log('useEffect解绑')
        }
    },[count])
    return (
        <div>
        <p>你点击了{count}次</p>
        <button onClick={()=>{setCount(count+1)}}>点击</button>
        <Router>
        <ul>
            <li>
                <Link to='/'>首页</Link>
            </li>
            <li>
                <Link to='/page/'>页面</Link>
            </li>
        </ul>
        <Route path="/" exact component={Index}></Route>
        <Route path="/page/" component={Page}></Route>
        </Router>
        </div>
    )
}
 
export default Example;