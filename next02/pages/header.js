
//自定义head
import Head from 'next/head'
// import '../static/test.css'

//antd 东西很多 所以我们需要按需加载
// import {Button} from 'antd' 
function Header(){
    return (
    <>
    <Head>
        <title>header</title>
        <mate charSet='utf-8'></mate>
    </Head>
    hello header.js
    {/* <div><Button>尝试是否可以改变按钮样式</Button></div> */}
    </>)
}
export default Header;