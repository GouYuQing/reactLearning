import React, { useState } from 'react';
//useState不能在判断语句里面使用
// let Show = true;
function Example2(){
    // if(Show){
        const [name,setName]=useState('yuqing');
    //     Show = false;
    // }
    const [age,setAge] = useState(18);
    const [work,setWork] = useState('学生');
    return(
        <div>
           <p>我的名字是{name},我的年龄是{age},我的工作是{work}</p>
        </div>
    )
}
export default Example2;
//useDffect()代替生命周期函数