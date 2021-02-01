import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Our main app import goes here
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter, sortByAmount, sortByDate } from './actions/filters';
import getVisibleExpenses from "./selectors/expenses";

import 'react-dates/lib/css/_datepicker.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({
    description: 'Water bill',
    amount: 4500,
    note: 'Patrick never paid this'
}));

store.dispatch(addExpense({
    description: 'Gas bill',
    note: 'What a year',
    createdAt: 1000
}));

store.dispatch(addExpense({
    description: 'Rent',
    amount: 109500,
    note: 'What a year'
}));

store.dispatch(sortByAmount());


// setTextFilter -> bill (2 items) -> water
// getVisibleExpenses -> print to screen
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
