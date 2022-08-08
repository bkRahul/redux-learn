const { createSlice } = require('@reduxjs/toolkit');
const { cakeActions } = require('../cake/cakeSlice');

const initialState = {
  numOfIceCream: 10,
};

const iceCreamSlice = createSlice({
  name: 'iceCream',
  initialState,
  reducers: {
    ordered: state => {
      state.numOfIceCream--;
    },
    restocked: (state, action) => {
      state.numOfIceCream += action.payload;
    },
  },
  // extraReducers: {
  //   ['cake/ordered']: state => {
  //     state.numOfIceCream--;
  //   },
  // },
  extraReducers: builder => {
    builder.addCase(cakeActions.ordered, state => {
      state.numOfIceCream--;
    });
  },
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;
