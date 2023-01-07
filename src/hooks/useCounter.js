import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function useCounter(initialCount, value) {

    const notifyReset = () => toast.success("Let's start again 😊");
    const [count, setCount] = useState(initialCount)

    const increment = () =>{
        setCount(prevCount => prevCount + value)
    }
    const decrement = () =>{
        setCount(prevCount => prevCount - value)
    }
    const reset = () =>{
        setCount(initialCount)
        notifyReset()
    }

    return [count, increment, decrement, reset, setCount, ToastContainer]

}

export default useCounter
