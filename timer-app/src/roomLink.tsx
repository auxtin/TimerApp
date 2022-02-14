import React, {useState, useEffect} from "react"
import { Button, ButtonGroup} from '@chakra-ui/react'
import { nanoid } from 'nanoid'

export default function RoomLink () {
    function handleSubmit() {
        setButtonText(`timer.com/` + urlSuffix)
    }
    const [buttonText, setButtonText] = useState(`submit`)
    const urlSuffix = nanoid(6);
    return<Button 
        colorScheme='blue' 
        size='lg'
        onClick={handleSubmit}
        >
            {buttonText}
        </Button>;
}
