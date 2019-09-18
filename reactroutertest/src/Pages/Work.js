import React from 'react';
import { Route, Link  } from "react-router-dom";
import One from './workspace/One';
import Two from './workspace/Two';


function Video(){
    return(
        <div>
            <div className='topNav'>
                <ul>
                    <li><Link to="/workspace/one/">郭</Link></li>
                    <li><Link to="/workspace/two/">丞</Link></li>
                </ul>
            </div>
            <div className="videoContent">
                <div><h3>workspace</h3></div>
                <Route path="/workspace/one/" component={One}></Route>
                <Route path="/workspace/two/" component={Two}></Route>
            </div>
        </div>
    )
}

export default Video;