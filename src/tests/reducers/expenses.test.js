import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, {'type': '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const idx_to_remove = 1;
    expect(idx_to_remove).toBeLessThan(expenses.length);
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[idx_to_remove].id
    }
    const initial_length = expenses.length;
    const state = expensesReducer(expenses, action);
    expect(state.length).toEqual(initial_length - 1);
    expect(state).toEqual(expenses.slice(0, idx_to_remove).concat(expenses.slice(idx_to_remove + 1)))
});

test('should not remove expense by invalid id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: 'boogaloo'
    }
    const initial_length = expenses.length;
    const state = expensesReducer(expenses, action);
    expect(state.length).toEqual(initial_length);
    expect(state).toEqual(expenses);
});


test('should add an expense', () => {
    const expense = {
        id: '5',
        description: 'Bananas and blow',
        amount: 667,
        note: 'Sancho',
        createdAt: 4000
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should remove an expense by id', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount: 999
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe(999);
});


test('should not remove an expense by invalid id', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: parseInt(expenses[1].id),
        updates: {
            amount: 999
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should call set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: expenses.slice(1, 3)
    };
    const state = expensesReducer([expenses[0]], action);
    expect(state).toEqual(expenses.slice(1, 3));
});