import { useState } from "react"

export const useCounter = () => {

    const [count, setCount] = useState(0)

    const [like, setLike] = useState("Bagus")

    const handleLike = () => {
        setLike((prevLike) => (prevLike === "Bagus" ? "Jelek" : "Bagus"))
    }

    const handleDecrement = () => {
        setCount(count - 1)
    }

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleReset = () => {
        setCount(0)
    }

    return { 
        count,
        like,
        handleLike,
        handleDecrement,
        handleIncrement,
        handleReset
    }
}
