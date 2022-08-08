const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');
const { default: axios } = require('axios');

const initialState = {
  loading: false,
  users: [],
  error: '',
};

const fetchUsers = createAsyncThunk('users/fetchUsers', () => {
  return axios
    .get('https://jsonplaceholder.typicode.com/usersss')
    .then(({ data }) => data);
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

module.exports = usersSlice.reducer;
module.exports.fetchUsers = fetchUsers;
