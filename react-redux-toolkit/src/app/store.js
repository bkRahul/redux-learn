import { configureStore } from '@reduxjs/toolkit';
import cakeReducer from '../features/cake/cakeSlice';
import iceCreamReducer from '../features/iceCream/iceCreamSlice';
import usersReducer from '../features/users/usersSlice';

// const reduxLogger = require('redux-logger');

// const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    users: usersReducer,
  },
  // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export default store;
