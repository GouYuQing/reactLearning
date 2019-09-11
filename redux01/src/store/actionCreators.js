import axios from 'axios'
//把action分离
import {GET_MY_LIST,CHANGE_INPUT,ADD_ITEM,DELETE_ITEM,GET_LIST} from './actionTypes'
export const changeInputAction = (value)=>({
    type:CHANGE_INPUT,
    value
})
export const addItemAction = ()=>({
    type:ADD_ITEM
})
export const deleteItemAction = (index)=>({
    type:DELETE_ITEM,
    index
})
export const getListAction = (data)=>({
    type:GET_LIST,
    data
})
export const getMyListAction=()=>({
    type:GET_MY_LIST
})
export const getTodoList = ()=>{
    return((dispatch)=>{
        axios.get('https://www.easy-mock.com/mock/5d44f5cf8aa85155233ce36d/example/getList')
        .then(res=>{
            // console.log(res);
            const data = res.data;
            const action = getListAction(data);
            //这个函数可以直接dispatch进去
            dispatch(action)
        })
    })
   
}