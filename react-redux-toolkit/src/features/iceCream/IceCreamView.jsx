import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { order, restock } from './iceCreamSlice'

export const IceCreamView = () => {
  const dispatch = useDispatch()

  const numOfIceCream = useSelector(state => state.iceCream.numOfIceCream)

  return (
    <>
      <h2>No. Of IceCream - {numOfIceCream}</h2>
      <button onClick={() => dispatch(order())}>Order IceCream</button>{' '}
      <button onClick={() => dispatch(restock())}>Restock IceCream</button>
    </>
  )
}
