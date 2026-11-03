import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/slices/counterSlice'

function Counter() {
const {count}=useSelector(state=>state.counterReducer)
const dispatch=useDispatch()
  return (
    <div style={{height:"100vh",backgroundColor:"black"}} className='d-flex justify-content-center align-items-center'>
      <div className='border rounded-3 p-5'>
        <h1 className='text-center p-5 text-light fs-1'>{count}</h1>
        <div className='d-flex justify-content-between mb-5'>
            <button onClick={()=>dispatch(decrement())} className='btn btn-warning'>Decrement</button>
            <button onClick={()=>dispatch(reset())} className='btn btn-danger'>Reset</button>
            <button onClick={()=>dispatch(increment())} className='btn btn-success'>Increment</button>
        </div>
        <div className='d-flex justify-content-center '>
            <input className='  form-control' type="text" placeholder='Incremented Counter Amount'/>
            <button className='btn btn-primary mx-3'>Increment By Amount</button>
        </div>
      </div>
    </div>
  )
}

export default Counter