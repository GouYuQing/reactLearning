import React, { Component } from 'react';
import PropTypes from 'prop-types'
//校验传递的值
class Sisieritem extends Component {
    state = {  }
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    render() { 
        return ( 
            <li onClick={this.handleClick}>
            {this.props.avname}点什么-{this.props.content}</li>
         );
    }
    handleClick(){
        // console.log(this.props.index)
        this.props.deleteItem(this.props.index)
    }
}
Sisieritem.propTypes={
    avname:PropTypes.string.isRequired,
    content:PropTypes.string,
    index:PropTypes.number,
    deleteItem:PropTypes.func
}
Sisieritem.defaultProps={
    avname:'我'
}
export default Sisieritem;