import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';

export class ExpensesSummary extends React.Component {

    render() {
        return (
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Viewing <span>{this.props.expenseCount}</span> expense{this.props.expenseCount > 1 ? 's' : ''} totaling <span>{numeral(this.props.expensesTotal/100).format('$0,0.00')}</span></h1>
                    <div className="page-header__actions">
                        <Link className="button" to="/create">Add Expense</Link>
                    </div>    
                </div>
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    const visible_expenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: visible_expenses.length,
        expensesTotal: getExpensesTotal(visible_expenses)
    }
};

export default connect(mapStateToProps)(ExpensesSummary);
