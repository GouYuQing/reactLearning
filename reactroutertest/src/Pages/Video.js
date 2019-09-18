import React from 'react';
import { Route, Link  } from "react-router-dom";
import ReactPage from './video/ReactPage';
import Vue from './video/Vue';
import Flutter from './video/Flutter';

function Video(){
    return(
        <div>
            <div className='topNav'>
                <ul>
                    <li><Link to="/video/reactpage/">郭丞1</Link></li>
                    <li><Link to="/video/fultterpage/">郭丞2</Link></li>
                    <li><Link to="/video/vuepage/">郭丞3</Link></li>

                </ul>
            </div>
            <div className="videoContent">
                <div><h3>啦啦啦</h3></div>
                <Route path="/video/reactpage/" component={ReactPage}></Route>
                <Route path="/video/fultterpage/" component={Flutter}></Route>
                <Route path="/video/vuepage/" component={Vue}></Route>

            </div>
        </div>
    )
}

export default Video;