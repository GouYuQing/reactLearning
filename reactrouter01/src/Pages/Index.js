import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[
                {uid:123,title:'hello world1'},
                {uid:456,title:'hello world2'},
                {uid:789,title:'hello world3'},

            ]
         }
         //编程式重定向
         this.props.history.push("/home/");
    }
    render() { 
        return ( 
        <div>
            {/* <Redirect to='/home/'></Redirect> */}
        <h2>hello world</h2>
        <ul>
            {
                this.state.list.map((item,index)=>{
                    return (
                        <li key={index}>
                        <Link to={'/list/'+item.uid}>{item.title}</Link></li>
                    )
                })
            }
        </ul>
        </div>
         )
    }
}
 
export default Index;