import { useState } from 'react'

function useCounter(initialCount, value) {
    const [count, setCount] = useState(initialCount)
    const increment = () =>{
        setCount(prevCount => prevCount + value)
    }
    const decrement = () =>{
        setCount(prevCount => prevCount - value)
    }
    const reset = () =>{
        setCount(initialCount)
    }

    return [count, increment, decrement, reset]
}

export default useCounter
