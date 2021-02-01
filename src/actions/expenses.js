import uuid from 'uuid';

// ADD_EXPENSE

export const addExpense = (
    {
        description = '',
        amount = 0,
        note = '',
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

// REMOVE_EXPENSE

export const removeExpense = (
{
    id
} = {}
) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// EDIT_EXPENSE

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});
