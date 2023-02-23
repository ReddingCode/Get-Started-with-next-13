"use client"

import { useState } from "react"

const words = ['helo','hi','cat','house','table','audio','video']

export default function WordGenerator() {
    // useEffect(() => {
    //     console.log('Hello  word');
    // }, [])
    const [word, setWord] = useState("Nothing yet :(")

    const generate = () => {
        const randonWord = words[Math.floor(Math.random() * words.length)]
        setWord(randonWord)
    }
    return (
        <div>
            <button onClick={generate}>
                Generate Word
            </button>
            <div>Generated: {word}</div>
        </div>
    )
    
}