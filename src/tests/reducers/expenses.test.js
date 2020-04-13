import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add expense', () => {
    const newExpense = {
        description: 'Movie',
        note: 'I went to see the movie yestoday',
        amount: 98,
        createdAt: 0,
        id: '4'
    };

    const action = {
        type: 'ADD_EXPENSE',
        expense: newExpense
    }

    const state = expensesReducer(expenses, action);

    expect(state).toEqual([
        ...expenses,
        newExpense
    ]);
});

test('should edit expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            description: 'TEST'
        }
    };

    const state = expensesReducer(expenses, action);

    expect(state[0].description).toBe('TEST');
});


test('should not edit expense if id not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '1369',
        updates: {
            description: 'TEST'
        }
    };

    const state = expensesReducer(expenses, action);

    expect(state[0].description).toEqual(expenses[0].description);
});

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses
    };

    const state = expensesReducer([expenses[0], expenses[1]], action);

    expect(state).toEqual(expenses);
});