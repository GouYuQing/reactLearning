import React, { Component } from 'react';
class Example3 extends Component {
        constructor(props) {
            super(props);
            this.state = { 
                count:0
             }
        }
        componentDidMount(){
            console.log(`componentDidMount=>you clicked ${this.state.count} times`)
        }
        componentDidUpdate(){
            console.log(`componentDidUpdata=>you clicked ${this.state.count} times`)

        }
        render() { 
            return ( 
                <div>
                    <h2>hello example</h2>
                    <p>你点击了{this.state.count}次</p>
                    <button  onClick={this.addCount.bind(this)}>点击</button>
                </div>
                 );
        }
        addCount(){
            this.setState({count:this.state.count+1})
        }
    }
 
export default Example3;