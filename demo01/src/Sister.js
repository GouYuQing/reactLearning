import React, { Component, Fragment } from 'react'
import './style.css'
import Sisieritem from './Sisteritem'
//增加fragment不影响flex布局
class Sister extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: ['抹茶蛋糕', '红豆冰沙']
        }
    }
    componentWillMount(){
        console.log('组件将要挂载到页面的时刻')
    }
    componentDidMount(){
        console.log('组件挂载完成的时刻')
    }
    shouldComponentUpdate(){
        console.log('1在组件更新前执行');
        //false不执行render
        return true;
    }
    componentWillUpdate(){
        console.log('2在组件即将更新前执行');
        return true;
    }
    componentDidUpdate(){
        console.log('组件更新完成时执行');
        return true;
    }
    componentWillReceiveProps(){
        console.log('有子组件时使用，但是这个没有只有Sisteritem有')
    }
    render() {
        console.log('挂在中。。');
        return (
            <Fragment>

                <div>
                    {/* 数据绑定  事件绑定*/}
                    <input 
                    className='input' 
                    value={this.state.inputValue} 
                    onChange={this.inputChage.bind(this)}
                    ref = {(input)=>{this.input = input}}
                    />
                    <button type="button" onClick={this.addList.bind(this)}>增加</button>
                </div>
                <ul ref={(ul)=>{this.ul = ul}}>
                    {/* <li>奶茶</li>
                       <li>冰淇淋</li> */}
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <div>
                                    <Sisieritem
                                        // avname='我'
                                        key={index+item}
                                        content={item}
                                        index={index}
                                       
                                        deleteItem={this.deleteItem.bind(this)}
                                    />
                                </div>

                            )

                        })
                    }
                </ul>


            </Fragment>
        )
    }
    inputChage(e) {
        // console.log(e.target.value);
        // this.state.inputValue = e.target.value;无法改变
        this.setState({
            // inputValue: e.target.value
            inputValue:this.input.value
        })
    }
    addList() {
        this.setState({
            //扩展运算符
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        },()=>{
            console.log(this.ul.querySelectorAll('li').length)

        })
    }
    deleteItem(index) {
        // console.log(index)
        //不出错但是不允许会造成后期功能障碍
        // this.state.list.splice(index,1)
        // this.setState({
        //     list:this.state.list
        // })
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list: list
        })

    }
}
export default Sister