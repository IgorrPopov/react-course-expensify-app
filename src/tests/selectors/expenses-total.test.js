import expenses from '../fixtures/expenses';
import selectExpensesTotal from '../../selectors/expenses-total';


test('should return 0 if no expenses', () => {
    expect(selectExpensesTotal([])).toBe(0);
});

test('should correctly add up a single expense', () => {
    expect(selectExpensesTotal([expenses[2]])).toBe(expenses[2].amount);
});

test('should correctly add up multiple expenses', () => {
    const totalExpensesAmount = 
        expenses[0].amount + expenses[1].amount + expenses[2].amount;
    expect(selectExpensesTotal(expenses)).toBe(totalExpensesAmount);
}); 