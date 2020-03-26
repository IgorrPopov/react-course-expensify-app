import React from 'react';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import selectExpensesTotal from '../../selectors/expenses-total';


test('should render ExpensesSummary correctly', () => {
    const wrapper = shallow(<ExpensesSummary />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with three expenses correctly', () => {
    const expensesCount = expenses.length;
    const expensesTotal = selectExpensesTotal(expenses);
    
    const wrapper = shallow(
        <ExpensesSummary 
            expensesCount={expensesCount}
            expensesTotal={expensesTotal}
        />
    );

    expect(wrapper).toMatchSnapshot();
});