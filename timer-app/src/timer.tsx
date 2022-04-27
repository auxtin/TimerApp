import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { nanoid } from 'nanoid'
import { Link } from "react-router-dom"
import { JoinedRoomContext } from "./App"
import { useDispatch, useSelector } from "react-redux";

const socket = io('http://localhost:4000');
// client-side connection using https://socket.io/docs/v4/server-socket-instance/
socket.on("connect", () => {
    console.log(`Connected to the backend🎉`)
    console.log(socket.id)
});

export default function Timer() {
    const dispatch = useDispatch()
    const [amount, setAmount] = useState("0")
    function handleSubmit() {
        setButtonText(`KnightsoftheStudyTable.com/` + urlSuffix)
        // setRoomJoined(true);
        setAmount("200")
        dispatch({type: "DEPOSIT", amount: parseInt(amount)})
        dispatch({type: "CREATEROOM", roomID: urlSuffix})

        // console.log(roomJoined);
        socket.emit("join-room", {room:urlSuffix, clockProp:timer}); // the url becomes the room
    }
    const [buttonText, setButtonText] = useState(`submit`)
    const urlSuffix = nanoid(6);
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [displayMessage, setDisplayEffect] = useState(false);
    // manages state if someone clicked the join room button, or joined through a link
    // const [roomJoined, setRoomJoined] = useState(false);
    socket.on('send-timer', (clock) => {
        console.log(`Clock Time: ${clock}`)
    })
    socket.on("user-joined", (msg) => {
        console.log(msg)
    })
    useEffect(() => {
        let interval = setInterval(() => {
            clearInterval(interval);
            if (seconds === 0) {
                if (minutes !== 0) {
                    setSeconds(59);
                    setMinutes(minutes - 1);
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
            socket.emit('custom-event', timer)
            // socket.emit('send-timer', timer)
        }, 1000);
    }, [seconds]);
    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;
    const timer = `${timerMinutes}:${timerSeconds}`
    const [clock, setClock] = useState(timer)
    useEffect(() => {
        setClock(timer)
        dispatch({type: "updateClock", roomID: (urlSuffix)})

        // console.log(clock)
    })

    const balance = useSelector(state=>state)
    // const backendClock =useSelector(state=>state.)
    return <div className="timer">Hi there👋
        <div className="title">⏲Timer⏲</div>
        <div className="message">
            {displayMessage && <div>You did it! 🎆🎇✅✔</div>}
        </div>
        {/* <div className="clock">{timerMinutes}:{timerSeconds}</div> */}
        <div className="clock">{clock}</div>
        <Link
            to={`/${urlSuffix}`}
            key={urlSuffix}>
            <Button
                colorScheme='blue'
                size='lg'
                onClick={handleSubmit}
            >
                {buttonText}
            </Button>
        </Link>
        <h1>${balance}</h1>
        {/* <h1>${backendClock}</h1> */}
        {/* <JoinedRoomContext.Consumer>
        {value =><div>{value}</div>}
        </JoinedRoomContext.Consumer> */}
    </div>
    ;

}