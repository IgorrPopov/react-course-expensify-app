import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abccc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abccc'
    });
});

test('shoud setup edit expense action object', () => {
    const action = editExpense('12345', { note: 'asdfasdf' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '12345',
        updates: { note: 'asdfasdf' }
    });
});

test('should setup add expense action object with default values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was last months rent'
    };

    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('sould setup add expense action object with default values', () => {
    const action = addExpense();

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            amount: 0,
            createdAt: 0,
            note: '',
            id: expect.any(String)
        }
    });
});