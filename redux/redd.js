const redux = require('redux');

const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;

const initialState = {
    counter: 0
}

const decrement = () => {
    return {
        type:'DEC_COUNTER',
    }
}

const remove = (value) => {
    return {
        type:'DEC_COUNTER',
        payload: value
    }
}

//reducer
const rootReducer = (state = initialState, action) => {
    if(action.type === 'INC_COUNTER') {
        return {
            ...state, 
            counter: state.counter + 1
        }
    }
    if(action.type === 'DEC_COUNTER') {
        return {
            ...state,
            counter: state.counter - 1
        }
    }
    if(action.type === 'ADD_COUNTER') {
        return {
            ...state, 
            counter: state.counter + action.payload
        }
    }
     if(action.type === 'REM_COUNTER') {
        return {
            ...state, 
            counter: state.counter - action.payload
        }
    }
    return state;
}

//store
const store = createStore(rootReducer);
console.log(store.getState())

//subscription
const unSubscribe = store.subscribe(() => {
    console.log('[Subscription]', store.getState())
})

//action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', payload: 10});

//bindActionCreators
const actions = bindActionCreators({decrement, remove}, store.dispatch)

actions.decrement()
actions.remove(10)

//unSubscribe
unSubscribe()
