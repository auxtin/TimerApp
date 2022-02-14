import React, {useState, useEffect} from "react";
import { nanoid } from 'nanoid'

export default function Timer() {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(5);
    const [displayMessage, setDisplayEffect] = useState(false);

    useEffect (() => {
        let interval = setInterval(() => {
            clearInterval(interval);
            if(seconds === 0) {
                if(minutes !== 0) {
                    setSeconds(59);
                    setMinutes(minutes-1);
                } else {
                    // let minutes = displayMessage ? 24: 4;
                    // let second = 59;

                    // setSeconds (second);
                    // setMinutes (minutes);
                    setDisplayEffect(!displayMessage);
                }
            } else {
                setSeconds(seconds - 1);
            }

        }, 1000);
    }, [seconds]);

    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;
    const url = nanoid(6);
    return <div className="timer">Hi there👋 
        <div className = "title">⏲Timer⏲</div>
        <div className="message">
            {displayMessage && <div>You did it! 🎆🎇✅✔</div>}
        </div>
        <div className="clock">{timerMinutes}:{timerSeconds}</div>
    </div>;
}