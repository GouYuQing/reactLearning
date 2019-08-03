import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'
class CssTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: true
        }
        this.toToggole = this.toToggole.bind(this)
    }
    render() {
        return (<div>
            <CSSTransition
                in={this.state.isShow}//是否出现的状态
                timeout={2000}//持续是时间
                classNames="boss-text"//classnames值防止重复
                unmountOnExit
            >
                <div >hellohello</div>
            </CSSTransition>

            <div><button onClick={this.toToggole}>点击</button></div>
        </div>);
    }
    toToggole() {
        this.setState({
            isShow: this.state.isShow ? false : true
        })
    }
}

export default CssTest;