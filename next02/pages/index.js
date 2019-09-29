import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

//query传递参数
const Home = ()=>{
    //routeChangeStart
    //routeChangeComplete
    //beforeHistoryChange
    //routeChangeError
    //hashChangeStart
    //hashChangeComplete
    Router.events.on('routeChangeStart',(...args)=>{
        console.log('1.routeChangeStart->路由开始变化，参数为',...args);
    })
    Router.events.on('routeChangeComplete',(...args)=>{
        console.log('2.routeChangeComplete->路由变化结束，参数为',...args);
    })
    Router.events.on('beforeHistoryChange',(...args)=>{
        console.log('3.beforeHistoryChange->路由变化，参数为',...args);
    })
    Router.events.on('routeChangeError',(...args)=>{
        console.log('4.routeChangeError->路由变化错误，参数为',...args);
    })
    Router.events.on('hashChangeStart',(...args)=>{
        console.log('5.hashChangeStart->hash开始变化，参数为',...args);
    })
    Router.events.on('hashChangeComplete',(...args)=>{
        console.log('6.hashChangeComplete->hash变化错误，参数为',...args);
    })
    function gotoXiaojiejie1(){
        // Router.push('/xiaojiejie?name=yu')
        //变成面向对象
        Router.push({
            pathname:'/xiaojiejie',
            query:{
                name:'yu'
            }
        })
    }
    function gotoXiaojiejie2(){
        // Router.push('/xiaojiejie?name=qing')
        Router.push({
            pathname:'/xiaojiejie',
            query:{
                name:'qing'
            }
        })
    }
    return (
        <>
         <div>我是首页</div>
      <div>
          {/* 标签式导航 */}
        <Link href={{pathname:'/xiaojiejie',query:{name:'yu'}}}><a>hello1</a></Link><br/>
        <Link href="/xiaojiejie?name=qing"><a>hello2</a></Link>
        </div>
        {/* 编程式跳转 */}
        <div>
            <button onClick={gotoXiaojiejie1}>yu</button>
            <button onClick={gotoXiaojiejie2}>qing</button>

        </div>
        <div>
            <Link href='#yuqing'><a>选我</a></Link>
        </div>
        </>
    )
}
export default Home;