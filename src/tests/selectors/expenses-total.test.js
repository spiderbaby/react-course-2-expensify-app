import expenses from '../fixtures/expenses';
import getExpensesTotal from '../../selectors/expenses-total';

test('should return 0 if no expenses', () => {
    expect(getExpensesTotal([])).toBe(0);
});

test('should correctly add up a single expense', () => {
    expect(getExpensesTotal([expenses[2]])).toBe(4500);
});

test('should rcorrectly add up multiple expenses', () => {
    expect(getExpensesTotal(expenses)).toBe(114195);
});

