import { useState, useEffect } from "react";

export default function DigitalClock() {

    const [time, setTime] = useState<Date>(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000)

        return () => {
            clearInterval(interval);
        }
    }, []);

    const padWithZero = (num: number) => (num < 10 ? "0" : "") + num;

    const handleTime = () => {
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();

        return `${padWithZero(hours)}:${padWithZero(minutes)}:${padWithZero(seconds)}`;
    }
    
    return(
        <div className="digital-clock-container">
            <h1>{handleTime()}</h1>
        </div>
    );
}