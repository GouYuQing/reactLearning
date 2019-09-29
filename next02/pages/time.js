import React,{useState} from 'react'
import dynamic from 'next/dynamic'

//moment的库会以公共库的方式打包加载，所以会造成资源浪费，使用懒加载改变
// import moment from 'moment'

//懒加载组件
const One  = dynamic(import('../components/one'))
function Time(){
    const [nowTime,setTime] = useState(Date.now())
    
    const changeTime=async ()=>{
        const moment  = await import('moment');
        setTime(moment.default(Date.now()).format())
    }
    return (
        <>
            <div>显示时间:{nowTime}</div>
            {/* 使用懒加载组件 */}
            <One></One>
            <div><button onClick={changeTime}>改变时间格式</button></div>

        </>
    )
}
export default Time