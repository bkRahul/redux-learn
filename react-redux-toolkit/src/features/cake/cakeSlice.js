import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  numOfCake: 10,
}

const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    order: state => {
      state.numOfCake--
    },
    restock: (state, action) => {
      const val = action.payload ?? 1
      state.numOfCake += val
    },
  },
})

export default cakeSlice.reducer
export const cakeActions = cakeSlice.actions
