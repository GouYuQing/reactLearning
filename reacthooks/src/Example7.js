import React, { useState ,useMemo} from 'react';

function Example7(){
    const [yu,setYu] = useState('小雨')
    const [qing,setQing] = useState('小晴')
    return(
        <div>
            <button onClick={()=>{setYu(new Date().getTime())}}>小雨</button>
            <button onClick={()=>{setQing(new Date().getTime()+"hello world")}}>小晴</button>
            <ChildComponent name={yu}>{qing}</ChildComponent>
        </div>
    )
}

function ChildComponent({name,children}){
    function changeYu(){
        console.log(`heool hello hello hello world`);
        return name+'yuyyuyuyuyuyuyuyuyuyuyu'
    }
    const actionYu =useMemo(()=>changeYu(name),[name])
    return (
        <div>
            <div>{actionYu}</div>
            <div>{children}</div>
        </div>
    )
}
export default Example7;