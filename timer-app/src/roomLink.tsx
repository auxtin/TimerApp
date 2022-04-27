import React, { useState, useEffect } from "react"
import { Button, ButtonGroup } from '@chakra-ui/react'
import { nanoid } from 'nanoid'
import { Link } from "react-router-dom"
import { io } from "socket.io-client";

const socket = io('http://localhost:4000');

export default function RoomLink() {
    function handleSubmit() {
        setButtonText(`KnightsoftheStudyTable.com/` + urlSuffix)
        socket.emit("join-room", urlSuffix)
    }

    const [buttonText, setButtonText] = useState(`submit`)
    const urlSuffix = nanoid(6);
    return <Link
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
}
