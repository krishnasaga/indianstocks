import React, { useEffect, useState } from 'react'

function msToTime(duration) {
    let seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24),
        days = Math.floor(duration / (24 * 60 * 60 * 1000));

    days = String(days).padStart(2, '0')
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    return [days, hours, minutes, seconds];
}



// 2021-07-21T12:24:31Z
export const useCountDown = ({ targetDate }) => {
    let currentDate = Date.now(),
        tgtDate = Date.parse(targetDate),
        targetTimeInMs = tgtDate - currentDate
    const [target, setTarget] = useState(targetTimeInMs)
    useEffect(() => {
        const interval = setInterval(function(){
            setTarget(tar => tar - 1000)
        }, 1000)
        return (() => {
            clearInterval(interval)
        })
    },[])
    if (targetTimeInMs && !isNaN(targetTimeInMs) && targetTimeInMs > 0) {
        return msToTime(target)
    }
    return [
        '00', '00', '00', '00'
    ];

}

