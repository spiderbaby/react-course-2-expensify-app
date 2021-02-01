import React from 'react';
import { shallow } from 'enzyme';

import expenses from '../fixtures/expenses';
import { AddExpensePage } from '../../components/AddExpensePage';

let addExpense, history, wrapper;

beforeEach(() => {
    addExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />);
});

test('should render AddExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

// test that when the form gets submitted and when it does that the spies are called with the correct information

test('should handle onSubmit', () => {
    //wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    wrapper.find('ExpenseForm').simulate('submit', expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
});


// test('', () => {

// });