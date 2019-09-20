import React, { useReducer } from 'react';

function Example5(){
    const [count,dispatch] = useReducer((state,action)=>{
        switch(action){
            case 'add':
                return state+1
            case 'sub':
                return state-1
            default:
                return state;
        }
    },0)
    return (
        <div>
            <p>现在的数字是：{count}</p>
            <button onClick={()=>dispatch('add')}>增加</button>
            <button onClick={()=>dispatch('sub')}>减少</button>

        </div>
    )
}
export default Example5;