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
console.log('etst')
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));