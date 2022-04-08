import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function CompD() {
    const state= useSelector(state=>state)
    const dispatch=useDispatch()
  return (
    <div>
        <p>Count in CompD- {state.count}</p>
      
    </div>
  )
}

export default CompD
