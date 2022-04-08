import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/actions/actions'

function Counter() {
    const state= useSelector(state=>state)
    const dispatch=useDispatch()
    console.log(state)

    
    const incrementCount=()=>{
        dispatch(increment())
    }
    const decrementCount=()=>{
        dispatch(decrement())
    }
    const resetCount=()=>{
        dispatch(reset())
    }
  return (
    <div>
        <p>count -{state.count}</p>
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>
        <button onClick={resetCount}>Reset</button>
      
    </div>
  )
}

export default Counter
