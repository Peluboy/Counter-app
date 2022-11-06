import React from 'react'
import useCounter from '../hooks/useCounter'
import './counter.css'

export const CustomHook = ({active, setActive}) => {

const [count, increment, decrement, reset] = useCounter(0, 1)

  return (
    <div className='mainContainer'>
      <h3>Counter app with Custom Hook</h3>
      <div className='caption'>
        <p>Subscribe  $10 to talk to a Therapist Today!</p>
        <img src="./images/Mask.svg" alt="" />
      </div>
      <div className='number'>
        <img src="./images/dollar.svg" alt="" />
        <div className='input'>
          <h2 className={count > 0 ? "positive" : count < 0 ?"negative" : null}>{count}</h2>
        </div>
        <div className='btns'>
          <div className='add'>
            <button onClick={increment}>+</button>
          </div>
          <div className='subtract'>
            <button onClick={decrement}>-</button>
          </div>
        </div>
      </div>
      <div className='bottom'>
        <div className='counter2'>
          <div onClick={()=> setActive(!active)}>Click me!!</div>
        </div>
        <div className='reset'>
          <button onClick={reset}>
            <img src="./images/reload.svg" alt="" />
              Reset
          </button>
        </div>
      </div>
    </div>
  )
}

