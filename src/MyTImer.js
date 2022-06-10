import React, {useState} from "react";

const MyTimer = () => {

    const [time, setTime] = useState(0)
    const [timerOn, setTimerOne] = useState(false)

    return(<div>
<div>{time}</div>
    </div>)
}

export default MyTimer; 