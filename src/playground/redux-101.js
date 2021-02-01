import { createStore } from 'redux';

// const incrementCount = (incrementBy) => ({
//     type: 'INCREMENT',
//     incrementBy: typeof incrementBy === 'number' ? incrementBy : 1
// });

const add = ({ a, b }, c) => {
    return a + b + c;
};

const add_skip_second = ([ a, , b ]) => {
    return a + b;
};

console.log(add({ a: 1, b: 12 }, 8))
console.log(add_skip_second([7, 19, 21]));

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ( {decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ( {count} ) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET',
});


// Reducers

const countReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            }
        default: return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});


//store.dispatch(incrementCount(5));
store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount( {decrementBy: 10 }));

store.dispatch(setCount( {count: -100} ));