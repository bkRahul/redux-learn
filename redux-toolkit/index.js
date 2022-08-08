import { getState, subscribe, dispatch } from './app/store';
import { cakeActions } from './features/cake/cakeSlice';
import { iceCreamActions } from './features/iceCream/iceCreamSlice';
import { fetchUsers } from './features/users/usersSlice';

console.log('initial state', getState());

const unSubscribe = subscribe(() => {
  console.log(getState());
});

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());

// store.dispatch(cakeActions.restocked(4));

// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.ordered());

// store.dispatch(iceCreamActions.restocked(4));

dispatch(fetchUsers());

// unSubscribe();
