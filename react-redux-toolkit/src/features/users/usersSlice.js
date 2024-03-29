import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  loading: false,
  users: [],
  error: '',
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', () => {
  return axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(({ data }) => data)
})

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false
      state.users = action.payload
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
    })
  },
})

export default usersSlice.reducer
