import {createStore,applyMiddleware,compose} from 'redux'
import reducer from './reducer'
// import thunk from 'redux-thunk'
import creatSagaMiddleware from 'redux-saga'
import mySagas from './sagas'

const sagaMiddleware = creatSagaMiddleware();
//配置redux-thunk中间件
//两个要一起使用插件和中间件 需要使用增强函数
const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
    // const enhancer = composeEnhancers(applyMiddleware(thunk))
     const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

const store = createStore(
    reducer,
    // applyMiddleware(thunk),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    enhancer//创建数据存储仓库
    )
    sagaMiddleware.run(mySagas)
export default store