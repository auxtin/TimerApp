import React, {useState, useEffect} from "react";
import { nanoid } from 'nanoid'
import { io } from "socket.io-client";

const socket = io('http://localhost:4000');
// client-side connection using https://socket.io/docs/v4/server-socket-instance/
socket.on("connect", () =>{
    console.log(`Connected to the backend🎉`)
    console.log(socket.id)
})
export default function Timer() {
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [displayMessage, setDisplayEffect] = useState(false);
    
    useEffect (() => {
        let interval = setInterval(() => {
            clearInterval(interval);
            if(seconds === 0) {
                if(minutes !== 0) {
                    setSeconds(59);
                    setMinutes(minutes-1);
                } else {
                    // this code is used to implement a break
                    // ----
                    // let minutes = displayMessage ? 24: 4;
                    // let second = 59;
                    // setSeconds (second);
                    // setMinutes (minutes);
                    // ----
                    setDisplayEffect(!displayMessage);
                }
            } else {
                setSeconds(seconds - 1);
            }
            // console.log(timer)
            socket.emit('custom-event',timer) 

        }, 1000);
    }, [seconds]);
    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;
    const timer = `${timerMinutes}:${timerSeconds}`
    const url = nanoid(6);
    return <div className="timer">Hi there👋 
        <div className = "title">⏲Timer⏲</div>
        <div className="message">
            {displayMessage && <div>You did it! 🎆🎇✅✔</div>}
        </div>
        <div className="clock">{timerMinutes}:{timerSeconds}</div>
    </div>;
}