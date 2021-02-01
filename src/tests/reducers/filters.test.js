import moment from 'moment';

import filtersReducer from '../../reducers/filters';


test('should set up default filter values', ()=>{
    const current_state = undefined;
    const state = filtersReducer(current_state, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month'),
    })
});

test('should set sortBy to amount', ()=>{
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', ()=>{
    const current_state = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = {type: 'SORT_BY_DATE'};
    const state = filtersReducer(current_state, action);
    expect(state.sortBy).toBe('date');
});

test('should set text filter', ()=>{
    const text = 'boogaloo';
    const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER', text});
    expect(state.text).toBe(text);
});


test('should set startDate filter', ()=>{
    const state = filtersReducer(undefined, {type: 'SET_START_DATE', startDate: moment(12908419)});
    expect(state.startDate).toEqual(moment(12908419));
});

test('should set endDate filter', ()=>{
    const state = filtersReducer(undefined, {type: 'SET_END_DATE', endDate: moment(-42908419)});
    expect(state.endDate).toEqual(moment(-42908419));
});