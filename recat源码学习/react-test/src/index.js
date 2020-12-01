import React from 'react';
import ReactDOM from 'react-dom';
// const ele = (
//   <div className="hello">
//     <h3 className="title">hello,world</h3>
//   </div>
// )


var ele = React.createElement("div", {
    className: "hello"
  }, React.createElement("h3", {
  className: "title"
}, "hello,world"));


//jsx:javascript+xml 虚拟DOM 语法糖
ReactDOM.render(ele,document.querySelector('#root'));