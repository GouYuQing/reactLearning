import React from 'react';
import { BrowserRouter as Router, Route, Link  } from "react-router-dom";
import Index from './Pages/Index'
import Video from './Pages/Video'
import WorkSpace from './Pages/Work'
import './Index.css'


function AppRouter(){
    let routeConfig = [
        {path:'/',title:'首页',exact:true,component:Index},
        {path:'/video/',title:'哥哥照片',exact:false,component:Video},
        {path:'/workspace/',title:'句子',exact:false,component:WorkSpace}
    ]
    return(
        <Router>
            <div className='mainDiv'>
                <div className='leftDiv'>
                    <h3>郭丞啊</h3>
                    <ul>
                        {/* <li><Link to="/">首页</Link></li>
                        <li><Link to="/video/">他的照片</Link></li>
                        <li><Link to="/workspace">句子</Link></li> */}
                        {
                            routeConfig.map((item,index)=>{
                                    return (
                                        <li key={index}><Link to={item.path}>{item.title}</Link></li>
                                    )
                            })
                        }

                    </ul>
                </div>
                <div className='rightMain'>
                    {/* <Route path="/" exact component={Index}/>
                    <Route path="/video/" component={Video}/>
                    <Route path="/workspace/" component={WorkSpace}/> */}
                        {
                            routeConfig.map((item,index)=>{
                                    return (
                                        <Route key={index} path={item.path} exact={item.exact} component={item.component} />
                                    )
                            })
                        }
                </div>
            </div>
        </Router>
    );
}

export default AppRouter;