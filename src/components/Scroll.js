import React from 'react'
import Cardlist from './Cardlist';
const Scroll= (props)=>{
    return(
        <div style={{ overflow: 'scroll', border: '0px solid black' , height: '500px'   }}>
            {props.children}
        </div>
    );
};

export default Scroll;
