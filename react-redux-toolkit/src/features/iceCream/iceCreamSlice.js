import { createSlice } from '@reduxjs/toolkit'
import { cakeActions } from '../cake/cakeSlice'

const initialState = {
  numOfIceCream: 10,
}

const iceCreamSlice = createSlice({
  name: 'iceCream',
  initialState,
  reducers: {
    order: state => {
      state.numOfIceCream--
    },
    restock: (state, action) => {
      const val = action.payload ?? 1
      state.numOfIceCream += val
    },
  },
  // extraReducers: {
  //   ['cake/ordered']: state => {
  //     state.numOfIceCream--;
  //   },
  // },
  extraReducers: builder => {
    builder.addCase(cakeActions.order, state => {
      state.numOfIceCream--
    })
  },
})

export default iceCreamSlice.reducer
export const { order, restock } = iceCreamSlice.actions
