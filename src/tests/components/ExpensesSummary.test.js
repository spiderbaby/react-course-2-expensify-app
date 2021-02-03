import React from 'react';
import { shallow } from 'enzyme';

import expenses from '../fixtures/expenses';
import filters from '../fixtures/filters';

import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should correctly render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={23512345678} />);
    expect(wrapper).toMatchSnapshot();
});