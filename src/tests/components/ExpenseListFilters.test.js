import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';

import { filters, altFilters } from '../fixtures/filters';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters 
            {...filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />);
});

test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with ald data correctly', () => {
    wrapper.setProps({...altFilters});
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
    const testText = 'gas';
    wrapper.find('input').simulate('change', {target: {value: testText}});
    expect(setTextFilter).toHaveBeenLastCalledWith(testText);
});

test('should sort by date', () => {
    wrapper.find('select').simulate('change', {target: {value: 'date'}});
    expect(sortByDate).toHaveBeenCalledTimes(1);
});

test('should sort by amount', () => {
    wrapper.find('select').simulate('change', {target: {value: 'amount'}});
    expect(sortByAmount).toHaveBeenCalledTimes(1);
});

test('should handle date changes', () => {
    const startDate = moment(0).add(4, 'years');
    const endDate = moment(0).add(8, 'years');
    wrapper.find('DateRangePicker').simulate('DatesChange', {startDate, endDate });
    expect(setStartDate).toHaveBeenCalledTimes(1);
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenCalledTimes(1);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus changes', () => {
    wrapper.find('DateRangePicker').prop('onFocusChange')('startDate');
    expect(wrapper.state('calendarFocused')).toBe('startDate');
});

test('should handle date focus changes 2', () => {
    wrapper.find('DateRangePicker').simulate('FocusChange', 'endDate');
    expect(wrapper.state('calendarFocused')).toBe('endDate');
});

test('should handle date focus changes 3', () => {
    wrapper.find('DateRangePicker').simulate('FocusChange', null);
    expect(wrapper.state('calendarFocused')).toEqual(null);
});
