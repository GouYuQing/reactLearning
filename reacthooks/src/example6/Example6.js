import React from 'react';
import ShowArea from './ShowArea';
import Buttons from './Button';
import { Color } from './color';   //引入Color组件

function Example6(){
    return (
        <div>
            <Color>
                <ShowArea />
                <Buttons />
            </Color>
            
        </div>
    )
}

export default Example6