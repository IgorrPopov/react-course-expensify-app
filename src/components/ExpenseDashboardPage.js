import React from 'react';
import ExpenseList from './ExpanseList';
import ExpenseListFilters from './ExpenseListFilters'

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList/>
    </div>
);

export default ExpenseDashboardPage;