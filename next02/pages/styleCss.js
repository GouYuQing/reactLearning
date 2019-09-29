import React,{useState} from 'react'
function styleCss(){
    const [color,setColor] = useState('blue');
    const changeClolor=()=>{
        setColor(color=='blue'?'red':'blue')
    }
    return (
        <>
        <div>hello world yuqing </div>
        <button onClick={changeClolor}>点击更换颜色</button>
        <style jsx>
            {`
             div{color:${color};}
             `
            }
        </style>
        </>
    )
}
export default styleCss;