import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';


export const ExpensesSummary = (props) => (
    <div className="page-header">
        <div className="content-container">
            {
                props.expensesCount ?
                <h1 className="page-header__title">{
                    `Viewing ${
                        props.expensesCount
                    } expenses totalling ${
                        numeral(props.expensesTotal / 100).format('$0,0.00')
                    }`
                }</h1> : ''
            }
            <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
            </div>
        </div>
    </div>
);

const mapStateToProps = (state) => {
    const expenses = selectExpenses(state.expenses, state.filters);
    
    return {
        expensesCount: expenses.length,
        expensesTotal: selectExpensesTotal(expenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);