import React, { useState } from 'react'

import './Counter.css'

function Counter() {


    const [count, setCount] = useState(0);

    return (
        <div className='Counter-dev' >


            <span id='count' >you click  <span className='red-tag' >{count}</span> times</span>

            <button id='btn' onClick={() => {
                setCount(count + 1);
            }} >Click</button>




        </div>
    )
}

export default Counter
