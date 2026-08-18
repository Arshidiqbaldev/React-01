import React, { useState, useEffect } from 'react'

function Clock() {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => clearInterval(timer)   // cleanup
    }, []);




    return (
        <div>

            <span><span className="h">{date.getHours()}</span>:
                <span className="m">{date.getMinutes()}</span>:
                <span className="s">{date.getSeconds()}</span></span>

        </div>
    )
}

export default Clock
