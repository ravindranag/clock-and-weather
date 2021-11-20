import { useEffect, useState } from 'react';
import './Clock.css';

const Clock = () => {
    const da = new Date();
    const [angle, setAngle] = useState({
        h: da.getHours()%12,
        m: da.getMinutes(),
        s: da.getSeconds()
    });
    // let carry = useRef(0);
    // console.log(carry.current);
    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date();
            let hr = date.getHours();
            if(hr>12){
                hr = hr%12;
            }
            let min = date.getMinutes();
            let sec = date.getSeconds();
            let hrAngle = hr*(360/12);
            // console.log('inside', carry.current);
            // carry.current = min%5;
            let minAngle = min*(360/60);
            let secAngle = sec*(360/60);
            const a = {
                h: hrAngle,
                m: minAngle,
                s: secAngle
            };
            setAngle(a);
        }, 100);
        return () => clearInterval(interval);
    }, []);
    

    return (
        <div className="Clock bg-gray-900 shadow-lg w-52 h-52 md:h-96 md:w-96 rounded-full mx-auto md:mx-0 flex items-center justify-center" style={{
            transform: 'rotate(-90deg)'
        }}>
            <div className="dot d1 w-2 h-2 rounded-full bg-white"></div>
            <div className="dot d2 w-2 h-2 rounded-full bg-white"></div>
            <div className="dot d3 w-2 h-2 rounded-full bg-white"></div>
            <div className="dot d4 w-2 h-2 rounded-full bg-white"></div>
            <div className="cg w-2 h-2 rounded-full bg-white">
                <div className="hand hour bg-white h-1 w-10 md:w-20" style={{
                    transform: `rotate(${angle.h}deg)`
                }}></div>
                <div className="hand minute bg-white h-1 w-16 md:w-32" style={{
                    transform: `rotate(${angle.m}deg)`
                }}></div>
                <div className="hand sec bg-white h-px w-20 md:w-36" style={{
                    transform: `rotate(${angle.s}deg)`
                }}></div>
            </div>

        </div>
    );
}
 
export default Clock;