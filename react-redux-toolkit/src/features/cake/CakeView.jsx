import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cakeActions } from './cakeSlice'

export const CakeView = () => {
  const dispatch = useDispatch()
  const numOfCake = useSelector(state => state.cake.numOfCake)

  const { order, restock } = cakeActions
  const [inputVal, setInputVal] = useState(0)

  return (
    <>
      <h2>No. Of Cake - {numOfCake}</h2>
      <button onClick={() => dispatch(order())}>Order Cake</button>
      <input
        type='number'
        val={inputVal}
        onChange={({ target }) => setInputVal(parseInt(target.value))}
      />
      <button onClick={() => dispatch(restock(inputVal))}>Restock Cake</button>
    </>
  )
}
