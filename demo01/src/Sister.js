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
    render() {
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