import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should set up remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should set up edit expense action object', () => {
    const amount = '325';
    const note = 'Latte';
    const id = '123abc';
    const action = editExpense(id, {
        amount,
        note
    });
    expect(action).toEqual(
        {
            type: 'EDIT_EXPENSE',
            id,
            updates: {
                amount,
                note
            }
        });
});


(id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});



test('should set up add expense action object with provided values', () => {
    const expenseData = {
        description: 'Coffee',
        amount:'325',
        note: 'Latte',
        createdAt: 1009
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...expenseData
        }
    });
});

test('should set up add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            amount: 0,
            note: '',
            createdAt: 0
        }
    });
});

